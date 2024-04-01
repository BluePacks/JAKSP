import os, zipfile

# Replace the paths below with the paths to your input and output directories
input_dir = ".\\mods"
output_dir = ".\\kubejs\\exported\\modres\\"

assets_dir = os.path.join(output_dir, "assets")
data_dir = os.path.join(output_dir, "data")

# Create the output directories if they don't already exist
os.makedirs(assets_dir, exist_ok=True)
os.makedirs(data_dir, exist_ok=True)

total = len(os.listdir(input_dir))
invalid = 0
for filename in os.listdir(input_dir):
    if filename.endswith(".jar"):
        # Extract the assets and data folders from the mod JAR file
        with zipfile.ZipFile(os.path.join(input_dir, filename)) as mod_jar:
            # Set up progress bar for this mod JAR file
            num_files = len(mod_jar.infolist())

            for zipinfo in mod_jar.infolist():
                if zipinfo.filename.startswith("assets/"):
                    mod_jar.extract(zipinfo, path=assets_dir)
                elif zipinfo.filename.startswith("data/"):
                    mod_jar.extract(zipinfo, path=data_dir)

        # Update progress bar
        print(f"Extracted {filename}")
    else:
        invalid += 1

print(f"{invalid} files skipped (not JAR files)")  # neat
