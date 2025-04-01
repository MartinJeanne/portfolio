import { Card } from "@/styles/StyledComponents";

export const SpotifyCard = () => (
  <Card>
    <iframe
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWl7MndYYxge"
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </Card>
);