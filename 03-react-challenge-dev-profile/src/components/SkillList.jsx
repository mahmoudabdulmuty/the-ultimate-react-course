import Skill from './Skill';

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='HTML+CSS' bg='blue' icon='💪' />
      <Skill skill='JavaScript' bg='yellow' icon='💪' />
      <Skill skill='Web Design' bg='green' icon='💪' />
      <Skill skill='Git and GitHub' bg='brown' icon='👍' />
      <Skill skill='React' bg='cyan' icon='💪' />
      <Skill skill='Svelte' bg='red' icon='👶' />
    </div>
  );
}

export default SkillList;
