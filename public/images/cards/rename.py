import os

def rename_images():
    directory = os.path.dirname(os.path.realpath(__file__))
    
    files = os.listdir(directory)
    
    for file in files:
        name, ext = os.path.splitext(file)
        
        if ext.lower() in ['.jpg', '.jpeg', '.png', '.gif']:
            new_name = name + "_of_spades" + ext
            
            os.rename(os.path.join(directory, file), os.path.join(directory, new_name))
            print(f"Renamed {file} to {new_name}")

rename_images()

