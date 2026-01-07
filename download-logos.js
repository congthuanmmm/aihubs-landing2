// Node.js script to download logos
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const LOGOS_DIR = 'logos';

// Ensure logos directory exists
if (!fs.existsSync(LOGOS_DIR)) {
    fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

const TOOLS = [
    { name: "Decktopus", domain: "decktopus.com" },
    { name: "Taskade", domain: "taskade.com" },
    { name: "TextCortex AI", domain: "textcortex.com" },
    { name: "Everneed AI", domain: "everneedai.com" },
    { name: "Easygen", domain: "easygen.io" },
    { name: "Advomate", domain: "advomate.cz" },
    { name: "Ailawyer", domain: "ailawyer.pro" },
    { name: "Apify", domain: "apify.com" },
    { name: "Meetcody", domain: "meetcody.ai" },
    { name: "Easy-peasy", domain: "easy-peasy.ai" },
    { name: "SEO Writing", domain: "seowriting.ai" },
    { name: "LIVE CHAT AI", domain: "livechat.com" },
    { name: "VOILA AI", domain: "getvoila.ai" },
    { name: "AI SEO", domain: "aiseo.ai" },
    { name: "Lovable", domain: "lovable.dev" },
    { name: "Readdy", domain: "readdy.ai" },
    { name: "Affitor", domain: "affitor.com" },
    { name: "Aitoptools", domain: "aitoptools.com" },
    { name: "Klap", domain: "klap.app" },
    { name: "logomeai", domain: "logomeai.com" },
    { name: "writecream", domain: "writecream.com" },
    { name: "10web", domain: "10web.io" },
    { name: "Alphana", domain: "alphana.ai" },
    { name: "Clipto", domain: "clipto.com" },
    { name: "Beforesunset", domain: "beforesunset.ai" },
    { name: "Mylens", domain: "mylens.ai" },
    { name: "Originality", domain: "originality.ai" },
    { name: "Winston", domain: "gowinston.ai" },
    { name: "Coral", domain: "getcoralai.com" },
    { name: "Notta", domain: "notta.ai" },
    { name: "Gamma", domain: "gamma.app" },
    { name: "SlideAi", domain: "slidesai.io" },
    { name: "Anara", domain: "anara.com" },
    { name: "Pdfai", domain: "pdf.ai" },
    { name: "youlearn ai", domain: "youlearn.ai" },
    { name: "Jogg", domain: "jogg.ai" },
    { name: "Heygen", domain: "heygen.com" },
    { name: "Fliki", domain: "fliki.ai" },
    { name: "Magiclight", domain: "magiclight.ai" },
    { name: "VideoGen", domain: "videogen.io" },
    { name: "MakeUGC", domain: "makeugc.ai" },
    { name: "Dupdub", domain: "dupdub.com" },
    { name: "Akool", domain: "akool.com" },
    { name: "Arcads", domain: "arcads.ai" },
    { name: "Argil", domain: "argil.ai" },
    { name: "Storyshort", domain: "storyshort.ai" },
    { name: "Aitubo", domain: "aitubo.ai" },
    { name: "BetterPic", domain: "betterpic.io" },
    { name: "Pikzels", domain: "pikzels.com" },
    { name: "Funfunart", domain: "funfun.art" },
    { name: "Flux", domain: "flux-ai.io" },
    { name: "Imagine", domain: "imagine.art" },
    { name: "Sellerpic", domain: "sellerpic.ai" },
    { name: "basedlabs", domain: "basedlabs.ai" },
    { name: "Promeai", domain: "promeai.pro" },
    { name: "Elevenlabs", domain: "elevenlabs.io" },
    { name: "Ausynclab", domain: "ausynclab.io" },
    { name: "Vbee", domain: "vbee.vn" },
    { name: "Mubert", domain: "mubert.com" },
    { name: "Make", domain: "make.com" },
    { name: "Pipedream", domain: "pipedream.com" },
    { name: "Pabbly", domain: "pabbly.com" },
    { name: "Albato", domain: "albato.com" }
];

function downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, (response) => {
            if (response.statusCode === 200) {
                const fileStream = fs.createWriteStream(filepath);
                response.pipe(fileStream);

                fileStream.on('finish', () => {
                    fileStream.close();
                    resolve(true);
                });

                fileStream.on('error', (err) => {
                    fs.unlink(filepath, () => { });
                    reject(err);
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirect
                downloadFile(response.headers.location, filepath)
                    .then(resolve)
                    .catch(reject);
            } else {
                reject(new Error(`Status code: ${response.statusCode}`));
            }
        }).on('error', reject);
    });
}

async function downloadLogo(tool) {
    const safeName = tool.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    const filepath = path.join(LOGOS_DIR, `${safeName}.png`);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
        console.log(`✓ ${tool.name}: Already exists`);
        return true;
    }

    console.log(`Downloading ${tool.name}...`);

    // Try Clearbit first
    const clearbitUrl = `https://logo.clearbit.com/${tool.domain}`;

    try {
        await downloadFile(clearbitUrl, filepath);
        console.log(`  ✓ Downloaded from Clearbit`);
        return true;
    } catch (error) {
        // Try Google favicon as fallback
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`;

        try {
            await downloadFile(faviconUrl, filepath);
            console.log(`  ✓ Downloaded favicon`);
            return true;
        } catch (err) {
            console.log(`  ✗ Failed: ${error.message}`);
            return false;
        }
    }
}

async function main() {
    console.log('=' + '='.repeat(60));
    console.log('Downloading AI Tool Logos...');
    console.log('=' + '='.repeat(60));
    console.log(`Total tools: ${TOOLS.length}\n`);

    let success = 0;
    let failed = 0;

    for (let i = 0; i < TOOLS.length; i++) {
        const tool = TOOLS[i];
        console.log(`[${i + 1}/${TOOLS.length}]`, '');

        const result = await downloadLogo(tool);
        if (result) {
            success++;
        } else {
            failed++;
        }

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    console.log('\n' + '=' + '='.repeat(60));
    console.log('SUMMARY');
    console.log('=' + '='.repeat(60));
    console.log(`✓ Successfully downloaded: ${success}`);
    console.log(`✗ Failed: ${failed}`);
    console.log(`\nLogos saved to: ${path.resolve(LOGOS_DIR)}`);
}

main().catch(console.error);
