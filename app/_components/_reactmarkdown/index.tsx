import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./styles.css";

const Instructions = `
1. Go to Youtube [youtube.com](https://www.youtube.com)
2. Then go to playlist section
<img src="/you-section.png" width="170" style="border-radius: 10px; margin: 10px 0px;" height="auto" />

3. Select your desired playlist
4. Copy the playlist ID from the URL
<img src="/playlist-id.png" width="600" style="border-radius: 10px; margin: 10px 0px; margin-right: 20px;" height="auto" />

- Or you can use a youtube mix Id. ***usually seen on the homepage***
<img src="/yt-mix.png" width="250" style="border-radius: 10px; margin: 10px 0px; margin-right: 20px;" height="auto" />

4. Copy the mix ID from the URL
<img src="/mix-id.png" width="600" style="border-radius: 10px; margin: 10px 0px; margin-right: 20px;" height="auto" />
`;

const ReactMarkdown = () => {
  return (
    <div className="markdown-body">
      <Markdown rehypePlugins={[rehypeRaw]}>{Instructions}</Markdown>
    </div>
  );
};

export default ReactMarkdown;
