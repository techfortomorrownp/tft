"use client";

import { useEffect } from "react";

interface InstagramPostProps {
  url: string;
}

export default function InstagramPost({ url }: InstagramPostProps) {
  useEffect(() => {
    if (!document.querySelector("#instagram-embed-script")) {
      const script = document.createElement("script");

      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      document.body.appendChild(script);
    } else {
      // @ts-expect-error Instagram adds this to window
      window.instgrm?.Embeds?.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "320px",
          minWidth: "280px",
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}