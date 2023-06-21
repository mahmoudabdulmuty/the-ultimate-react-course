function Skill({ skill, bg, icon }) {
  return (
    <div style={{ background: bg }} className='skill'>
      {skill} {icon}
    </div>
  );
}

export default Skill;
