#!/usr/bin/env python3
"""
Update tools-data.js to include logo paths
"""

import os
import json

# Logo directory
LOGOS_DIR = "logos"

# Tool names mapping
TOOLS_MAPPING = {
    "Decktopus": "decktopus",
    "Taskade": "taskade",
    "TextCortex AI": "textcortex-ai",
    "Everneed AI": "everneed-ai",
    "Easygen": "easygen",
    "Advomate": "advomate",
    "Ailawyer": "ailawyer",
    "Apify": "apify",
    "Meetcody": "meetcody",
    "Easy-peasy": "easy-peasy",
    "SEO Writing": "seo-writing",
    "LIVE CHAT AI": "live-chat-ai",
    "VOILA AI": "voila-ai",
    "AI SEO": "ai-seo",
    "Lovable": "lovable",
    "Readdy": "readdy",
    "Affitor": "affitor",
    "Aitoptools": "aitoptools",
    "Klap": "klap",
    "logomeai": "logomeai",
    "writecream": "writecream",
    "10web": "10web",
    "Alphana": "alphana",
    "Clipto": "clipto",
    "Beforesunset": "beforesunset",
    "Mylens": "mylens",
    "Originality": "originality",
    "Winston": "winston",
    "Coral": "coral",
    "Notta": "notta",
    "Gamma": "gamma",
    "SlideAi": "slideai",
    "Anara": "anara",
    "Pdfai": "pdfai",
    "youlearn ai": "youlearn-ai",
    "Jogg": "jogg",
    "Heygen": "heygen",
    "Fliki": "fliki",
    "Magiclight": "magiclight",
    "VideoGen": "videogen",
    "MakeUGC": "makeugc",
    "Dupdub": "dupdub",
    "Akool": "akool",
    "Arcads": "arcads",
    "Argil": "argil",
    "Storyshort": "storyshort",
    "Aitubo": "aitubo",
    "BetterPic": "betterpic",
    "Pikzels": "pikzels",
    "Funfunart": "funfunart",
    "Flux": "flux",
    "Imagine": "imagine",
    "Sellerpic": "sellerpic",
    "basedlabs": "basedlabs",
    "Promeai": "promeai",
    "Elevenlabs": "elevenlabs",
    "Ausynclab": "ausynclab",
    "Vbee": "vbee",
    "Mubert": "mubert",
    "Make": "make",
    "Pipedream": "pipedream",
    "Pabbly": "pabbly",
    "Albato": "albato"
}

def get_logo_path(tool_name):
    """Get logo path for a tool"""
    filename = TOOLS_MAPPING.get(tool_name, tool_name.lower().replace(' ', '-'))
    logo_path = f"logos/{filename}.png"
    
    # Check if file exists
    if os.path.exists(logo_path):
        return logo_path
    return None

def generate_updated_js():
    """Generate updated tools-data.js content"""
    # This is a template - you would need to read the actual tools-data.js
    # and update it with logo paths
    print("Update tools-data.js manually by adding logo field to each tool:")
    print()
    
    for tool_name, filename in TOOLS_MAPPING.items():
        logo_path = f"logos/{filename}.png"
        print(f'  {{ ..., name: "{tool_name}", logo: "{logo_path}" }},')

if __name__ == "__main__":
    print("=" * 60)
    print("Logo Integration Helper")
    print("=" * 60)
    print()
    generate_updated_js()
