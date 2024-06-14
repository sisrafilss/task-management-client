const UserTypesSection = () => {
  const userTypes = [
    { type: 'Developers', description: 'Optimize workflows and manage your coding projects efficiently.' },
    { type: 'Corporate Professionals', description: 'Stay on top of your tasks and manage your team with ease.' },
    { type: 'Bankers', description: 'Handle financial tasks and coordinate with your team effortlessly.' },
    { type: 'Freelancers', description: 'Keep track of client projects and deadlines seamlessly.' },
    { type: 'Students', description: 'Manage your assignments and group projects efficiently.' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Who Uses Our Task Management App?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-bold mb-2">{user.type}</h3>
              <p className="text-gray-600">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
