export async function generateStaticParams() {
  return [{ params: { slug: "aboutme" } }];
}

const AboutMePage = () => {
  return (
    <div>
      <h1>About Me Page</h1>
      <p>이곳은 About Me 페이지입니다.</p>
    </div>
  );
};

export default AboutMePage;
