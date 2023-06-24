function Skill({ skill }) {
  const emoji =
    skill.level === 'advanced'
      ? '💪'
      : skill.level === 'intermediate'
      ? '👍'
      : '👶';

  return (
    <div style={{ backgroundColor: skill.color }} className='skill'>
      <span>{skill.name}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default Skill;
