import sharp from "sharp";
import { NextResponse } from "next/server";

export async function GET(request, res) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  console.log("inside api image route", searchParams);
  if (url) {
    try {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();

      // Use sharp to get raw pixel data
      const { data, info } = await sharp(Buffer.from(buffer))
        .raw()
        .toBuffer({ resolveWithObject: true });

      let r = 0,
        g = 0,
        b = 0;

      // Loop over all pixels and add up all the red, green and blue values
      for (let i = 0; i < data.length; i += 3) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      // Divide by the number of pixels to get the average RGB values
      const numPixels = info.width * info.height;
      r /= numPixels;
      g /= numPixels;
      b /= numPixels;

      // Send the average color as a response
      return NextResponse.json(
        {
          data: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
        },
        { status: 200 }
      );
    } catch (e) {
      return NextResponse.json({ error: e.toString(), status: 500 });
    }
  } else {
    return NextResponse.json({ error: "You need an image url", status: 500 });
  }
}
