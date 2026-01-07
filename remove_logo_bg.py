"""
Script to remove background from all logos in the logos directory
and save them as transparent PNG files
"""

from rembg import remove
from PIL import Image
import os
from pathlib import Path

def remove_background_batch(input_dir, output_dir):
    """
    Remove background from all images in input_dir and save to output_dir
    """
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # Get all PNG files
    input_path = Path(input_dir)
    image_files = list(input_path.glob("*.png"))
    
    total = len(image_files)
    print(f"Found {total} logo files to process...")
    
    for idx, img_path in enumerate(image_files, 1):
        try:
            print(f"[{idx}/{total}] Processing: {img_path.name}")
            
            # Open image
            input_image = Image.open(img_path)
            
            # Remove background
            output_image = remove(input_image)
            
            # Save to output directory
            output_path = Path(output_dir) / img_path.name
            output_image.save(output_path, "PNG")
            
            print(f"  ✓ Saved to: {output_path.name}")
            
        except Exception as e:
            print(f"  ✗ Error processing {img_path.name}: {str(e)}")
            continue
    
    print(f"\n✅ Done! Processed {total} logos.")
    print(f"Transparent logos saved to: {output_dir}")

if __name__ == "__main__":
    # Set paths
    input_directory = "logos"
    output_directory = "logos_transparent"
    
    print("=" * 60)
    print("Logo Background Removal Tool")
    print("=" * 60)
    
    remove_background_batch(input_directory, output_directory)
    
    print("\n" + "=" * 60)
    print("Next steps:")
    print("1. Review logos in 'logos_transparent' folder")
    print("2. Replace old logos in 'logos' folder if satisfied")
    print("=" * 60)
