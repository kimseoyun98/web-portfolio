export async function generateStaticParams() {
  return [{ params: { slug: "aboutme" } }];
}

const AboutMePage = () => {
  return (
    <div>
      <h1>About Me Page</h1>
    </div>
  );
};

export default AboutMePage;
