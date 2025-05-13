// src/components/Discussion.tsx
"use client";

import React, { useEffect, useRef } from "react";

export default function Discussion() {
  const discussionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!discussionRef.current || discussionRef.current.hasChildNodes()) {
      // Don't load multiple times
      return;
    }

    // Retrieve Giscus configuration from environment variables
    const giscusRepo = process.env.NEXT_PUBLIC_GISCUS_REPO;
    const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const giscusCategory = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
    const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

    if (!giscusRepo || !giscusRepoId || !giscusCategory || !giscusCategoryId) {
      if (discussionRef.current) {
        discussionRef.current.innerHTML = 
          '<p class="text-muted-foreground">Giscus discussion aint properly configured. \nPlease set NEXT_PUBLIC_GISCUS_REPO, NEXT_PUBLIC_GISCUS_REPO_ID, \nNEXT_PUBLIC_GISCUS_CATEGORY, and NEXT_PUBLIC_GISCUS_CATEGORY_ID \nenvironment variables in your Vercel project settings.</p>';
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", giscusRepo);
    script.setAttribute("data-repo-id", giscusRepoId);
    script.setAttribute("data-category", giscusCategory);
    script.setAttribute("data-category-id", giscusCategoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark_protanopia"); 
    script.setAttribute("data-lang", "en");

    discussionRef.current.appendChild(script);

    return () => {
      if (discussionRef.current) {
        while (discussionRef.current.firstChild) {
          discussionRef.current.removeChild(discussionRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Discussion</h2>
      <div ref={discussionRef} className="giscus"></div>
    </div>
  );
}

