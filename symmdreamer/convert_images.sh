#!/bin/bash

# Directory containing the images
IMAGE_DIR="/home/ryan/work/RyanXLi.github.io/symmdreamer/images"
VIDEO_DIR="/home/ryan/work/RyanXLi.github.io/symmdreamer/videos/images"
# Duration of the video in seconds
DURATION=1

# Check if IMAGE_DIR exists
if [ ! -d "$IMAGE_DIR" ]; then
  echo "Directory $IMAGE_DIR does not exist."
  exit 1
fi

# Iterate through all image files in the directory
for IMAGE in "$IMAGE_DIR"/*; do
  # Check if there are no image files
  if [ ! -e "$IMAGE" ]; then
    echo "No image files found in the directory."
    exit 1
  fi

  # Get the file name without the extension
  BASENAME=$(basename "$IMAGE")
  FILENAME="${BASENAME%.*}"

  # Convert the image to a one-frame video
  ffmpeg -loop 1 -i "$IMAGE" -c:v libx264 -t "$DURATION" -pix_fmt yuv420p "$VIDEO_DIR/$FILENAME.mp4"
#   ffmpeg -loop 1 -i "$IMAGE" -c:v mpeg4 -t "$DURATION" -q:v 1 "$VIDEO_DIR/$FILENAME.mp4"


  echo "Converted $IMAGE to $FILENAME.mp4"
done

echo "All images have been converted to videos."