import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const App = () => {
  const teamMembers = [
    {
      image: '',
      name: 'Chaitanya Pawar',
      role: 'Backend Developer',
      bio: 'A really proficient developer with skills in MEAN Stack.'
    },
    {
      image: '',
      name: 'Gourish Chouhan',
      role: 'Frontend Developer',
      bio: 'A really proficient developer with skills in MERN Stack.'
    },
    {
      image: '',
      name: 'Dinesh Kondapalli',
      role: 'UI/UX Designer',
      bio: 'A really proficient developer with skills in MERN Stack.'
    },
  ];

  return (
    <div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          image={member.image}
          name={member.name}
          role={member.role}
          bio={member.bio}
        />
      ))}
    </div>
  );
};

export default App;