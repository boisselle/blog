---
title: Counting Colors in an Image Using Python & Pillow
date: 2020-11-21T23:57:07.523Z
description: Debunking a meme about tetrachromacy
---
There is a meme going around social media regarding tetrachromats, individuals with four-dimensional color perception. Supposedly, you have highly advanced vision if you can see 39 colors. I was immediately suspicious when I saw it. Social media memes are often incorrect or misleading. As is my habit, I zoomed in on the image with great skepticism.

![](color_screenshot.png)

As I tried to hand-count through the pinks and purples on the far left side, I exceeded 15 and came to the conclusion that my skepticism was justified. However, I still wanted to find out how many colors there were in the image. I decided it would be fun to write a script to figure out the color count. 

Using python, this is a very easy task. To count the number of colors in the image, you simply need to go through each pixel and check the color value. You can do this with Pillow, which is a fork of the Python Image Library (PIL). This is a great package for image processing. If you use anaconda, Pillow already comes bundled with it so there are no extra dependencies to deal with.

The following script can be used to process any image in order to get the unique color count.

```
from PIL import Image
img = Image.open('/path/to/image', 'r')
pixel_list = list(img.getdata())

# Check the size of the pixel list
print('The size of the image is ', len(pixel_list), ' pixels.')

# Get the length of the set of unique values. This is the color count.
print('There are ' len(set(pixel_list)), ' unique colors in this image')
```

Super easy! Simply import PIL, open the image, and get the image data using Image.getdata(). This method returns a sequence of (r, g, b, a) values corresponding to each pixel. Convert this sequence into a list in order to perform operations on it, and then convert the list into a set in order to discard all duplicate color entries.

### The final tally?

The script produces the following output:

```
The size of the image is 1598508 pixels.
There are 47114 unique colors in this image.
```

There are roughly 47,114 colors in the picture. Of course, this number is just an estimate. The actual number also depends on file metadata, the type of monitor used to take a screenshot and how the image is manipulated as it spreads from person to person. Since I’m using a 27” Retina 5K monitor, I have a far higher pixel density in my screenshots than many other monitors. As you can see in the output, over 1.5 million pixels were very rapidly processed from this image. Testing with a 27” 4K monitor, the number of unique colors is reduced to 28,564. With a laptop or regular HD monitor it would be reduced even further. The number also depends on how the image is cropped for processing, but we can save the philosophical question of where the image actually begins for another day!

To conclude, if you see more than 39 colors, you might still be a tetrachromat, but it's more likely that you are just a developer or designer.