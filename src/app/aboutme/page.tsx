export async function generateStaticParams() {
  return [{ params: { slug: "aboutme" } }];
}

const AboutMePage = () => {
  return (
    <div>
      <h1>About Me Page</h1>
      <p>This is the About Me page.</p>
    </div>
  );
};

export default AboutMePage;
