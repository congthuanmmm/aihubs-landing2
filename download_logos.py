#!/usr/bin/env python3
"""
Logo Downloader for AI Tools
Downloads logos from Clearbit Logo API and other sources
"""

import os
import requests
import time
from urllib.parse import urlparse
import json

# Create logos directory if it doesn't exist
LOGOS_DIR = "logos"
if not os.path.exists(LOGOS_DIR):
    os.makedirs(LOGOS_DIR)

# Tool names from tools-data.js
TOOLS = [
    {"name": "Decktopus", "link": "https://www.decktopus.com"},
    {"name": "Taskade", "link": "https://taskade.com"},
    {"name": "TextCortex AI", "link": "https://textcortex.com"},
    {"name": "Everneed AI", "link": "https://everneedai.com"},
    {"name": "Easygen", "link": "https://easygen.io"},
    {"name": "Advomate", "link": "http://advomate.cz"},
    {"name": "Ailawyer", "link": "https://ailawyer.pro"},
    {"name": "Apify", "link": "https://www.apify.com"},
    {"name": "Meetcody", "link": "https://meetcody.ai"},
    {"name": "Easy-peasy", "link": "https://easy-peasy.ai"},
    {"name": "SEO Writing", "link": "https://seowriting.ai"},
    {"name": "LIVE CHAT AI", "link": "https://www.livechat.com"},
    {"name": "VOILA AI", "link": "https://www.getvoila.ai"},
    {"name": "AI SEO", "link": "https://aiseo.ai"},
    {"name": "Lovable", "link": "https://lovable.dev"},
    {"name": "Readdy", "link": "https://readdy.ai"},
    {"name": "Affitor", "link": "https://affitor.com"},
    {"name": "Aitoptools", "link": "https://aitoptools.com"},
    {"name": "Klap", "link": "https://klap.app"},
    {"name": "logomeai", "link": "https://logomeai.com"},
    {"name": "writecream", "link": "https://www.writecream.com"},
    {"name": "10web", "link": "https://10web.io"},
    {"name": "Alphana", "link": "https://www.alphana.ai"},
    {"name": "Clipto", "link": "https://www.clipto.com"},
    {"name": "Beforesunset", "link": "https://www.beforesunset.ai"},
    {"name": "Mylens", "link": "https://mylens.ai"},
    {"name": "Originality", "link": "https://originality.ai"},
    {"name": "Winston", "link": "https://gowinston.ai"},
    {"name": "Coral", "link": "https://www.getcoralai.com"},
    {"name": "Notta", "link": "https://notta.ai"},
    {"name": "Gamma", "link": "https://gamma.app"},
    {"name": "SlideAi", "link": "https://slidesai.io"},
    {"name": "Anara", "link": "https://www.anara.com"},
    {"name": "Pdfai", "link": "https://pdf.ai"},
    {"name": "youlearn ai", "link": "https://app.youlearn.ai"},
    {"name": "Jogg", "link": "https://www.jogg.ai"},
    {"name": "Heygen", "link": "https://heygen.com"},
    {"name": "Fliki", "link": "https://fliki.ai"},
    {"name": "Magiclight", "link": "https://www.magiclight.ai"},
    {"name": "VideoGen", "link": "https://videogen.io"},
    {"name": "MakeUGC", "link": "https://www.makeugc.ai"},
    {"name": "Dupdub", "link": "http://www.dupdub.com"},
    {"name": "Akool", "link": "https://akool.com"},
    {"name": "Arcads", "link": "https://arcads.ai"},
    {"name": "Argil", "link": "https://argil.ai"},
    {"name": "Storyshort", "link": "https://storyshort.ai"},
    {"name": "Aitubo", "link": "https://aitubo.ai"},
    {"name": "BetterPic", "link": "https://www.betterpic.io"},
    {"name": "Pikzels", "link": "https://pikzels.com"},
    {"name": "Funfunart", "link": "https://www.funfun.art"},
    {"name": "Flux", "link": "https://flux-ai.io"},
    {"name": "Imagine", "link": "https://www.imagine.art"},
    {"name": "Sellerpic", "link": "https://sellerpic.ai"},
    {"name": "basedlabs", "link": "https://www.basedlabs.ai"},
    {"name": "Promeai", "link": "https://www.promeai.pro"},
    {"name": "Elevenlabs", "link": "https://elevenlabs.io"},
    {"name": "Ausynclab", "link": "https://ausynclab.io"},
    {"name": "Vbee", "link": "https://vbee.vn"},
    {"name": "Mubert", "link": "https://mubert.com"},
    {"name": "Make", "link": "https://www.make.com"},
    {"name": "Pipedream", "link": "https://pipedream.com"},
    {"name": "Pabbly", "link": "https://www.pabbly.com"},
    {"name": "Albato", "link": "https://albato.com"}
]

def get_domain(url):
    """Extract clean domain from URL"""
    parsed = urlparse(url)
    domain = parsed.netloc or parsed.path
    domain = domain.replace('www.', '')
    return domain

def download_logo_clearbit(domain, filename):
    """Download logo using Clearbit Logo API"""
    logo_url = f"https://logo.clearbit.com/{domain}"
    try:
        response = requests.get(logo_url, timeout=10)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"  ❌ Clearbit failed: {e}")
    return False

def download_logo_favicon(domain, filename):
    """Download favicon as fallback"""
    favicon_urls = [
        f"https://{domain}/favicon.ico",
        f"https://{domain}/favicon.png",
        f"https://www.google.com/s2/favicons?domain={domain}&sz=128"
    ]
    
    for favicon_url in favicon_urls:
        try:
            response = requests.get(favicon_url, timeout=10)
            if response.status_code == 200 and len(response.content) > 100:
                with open(filename, 'wb') as f:
                    f.write(response.content)
                return True
        except Exception as e:
            continue
    return False

def download_logo(tool_name, url):
    """Download logo for a tool"""
    domain = get_domain(url)
    
    # Create safe filename
    safe_name = tool_name.lower().replace(' ', '-').replace('/', '-')
    filename = os.path.join(LOGOS_DIR, f"{safe_name}.png")
    
    # Skip if already exists
    if os.path.exists(filename):
        print(f"✓ {tool_name}: Already exists")
        return filename
    
    print(f"Downloading {tool_name} ({domain})...")
    
    # Try Clearbit first
    if download_logo_clearbit(domain, filename):
        print(f"  ✓ Downloaded from Clearbit")
        return filename
    
    # Try favicon as fallback
    if download_logo_favicon(domain, filename):
        print(f"  ✓ Downloaded favicon")
        return filename
    
    print(f"  ❌ Failed to download")
    return None

def main():
    print("=" * 60)
    print("AI Tools Logo Downloader")
    print("=" * 60)
    print(f"\nDownloading logos to: {LOGOS_DIR}/")
    print(f"Total tools: {len(TOOLS)}\n")
    
    results = {
        "success": [],
        "failed": []
    }
    
    for i, tool in enumerate(TOOLS, 1):
        print(f"\n[{i}/{len(TOOLS)}] ", end="")
        
        filename = download_logo(tool["name"], tool["link"])
        
        if filename:
            results["success"].append(tool["name"])
        else:
            results["failed"].append(tool["name"])
        
        # Rate limiting
        time.sleep(0.5)
    
    # Print summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"✓ Successfully downloaded: {len(results['success'])}")
    print(f"✗ Failed: {len(results['failed'])}")
    
    if results["failed"]:
        print("\nFailed tools:")
        for name in results["failed"]:
            print(f"  - {name}")
    
    print("\n✓ Logos saved to: " + os.path.abspath(LOGOS_DIR))
    print("\nNext steps:")
    print("1. Review the downloaded logos")
    print("2. Run the integration script to update tools-data.js")
    print("3. Update the website to display logos")

if __name__ == "__main__":
    main()
