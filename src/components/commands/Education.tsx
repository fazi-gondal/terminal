import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BA IT",
    desc: "University of Sargodha",
  },
  {
    title: "ICS (Phy)",
    desc: "Punjab Group of College",
  },
  {
    title: "Web & App Development",
    desc: "YouTube/codewithharry",
  },
];

export default Education;
