import skills from '../skills';
import Skill from './Skill';

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
}

export default SkillList;
