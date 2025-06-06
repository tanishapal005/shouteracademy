import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const EditableAboutUs = () => {
  const [aboutData, setAboutData] = useState({
    journeyTitle: 'Our Journey',
    journeyContent:
      'Founded in 2021, our academy started with a mission to make tech education accessible to everyone...',
    imageUrl: '/images/about-building.png',
    cards: [
      {
        title: 'Mission',
        description:
          'We are committed to delivering high-quality education using practical learning approaches.',
        image: '/images/mission.png',
      },
      {
        title: 'Vision',
        description:
          'Our vision is to help learners transition into meaningful careers in tech.',
        image: '/images/vision.png',
      },
      {
        title: 'Commitment',
        description:
          'We strive to create a supportive learning environment for every learner.',
        image: '/images/commitment.png',
      },
    ],
    impact: {
      youtube: '3,000+',
      students: '15,000+',
      trainings: '20',
      rating: '5/5',
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e, path) => {
    const value = e.target.value;
    const updatedData = { ...aboutData };
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let temp = updatedData;
    for (let i = 0; i < keys.length - 1; i++) {
      temp = temp[keys[i]];
    }
    temp[keys[keys.length - 1]] = value;
    setAboutData(updatedData);
  };

  const toggleEditing = async () => {
    if (isEditing) {
      try {
        await fetch('http://localhost:5000/api/about', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(aboutData),
        });
        toast.success('About Us data updated successfully!');
      } catch (error) {
        console.error('Failed to update About Us data:', error);
        toast.error('Update failed!');
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-8 space-y-10 text-gray-800 ml-64 mt-16">
      <button
        onClick={toggleEditing}
        className={`px-4 py-2 rounded-md font-medium ${
          isEditing ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }`}
      >
        {isEditing ? 'Save Changes' : 'Edit Content'}
      </button>

      {/* Journey Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Journey Section</h2>
        {isEditing ? (
          <input
            type="text"
            className="border p-2 w-full mb-2"
            value={aboutData.journeyTitle}
            onChange={(e) => handleInputChange(e, 'journeyTitle')}
            placeholder="Journey Title"
          />
        ) : (
          <h3 className="text-xl font-semibold">{aboutData.journeyTitle}</h3>
        )}

        {isEditing ? (
          <textarea
            className="border p-2 w-full mb-2"
            rows={4}
            value={aboutData.journeyContent}
            onChange={(e) => handleInputChange(e, 'journeyContent')}
            placeholder="Journey Description"
          />
        ) : (
          <p className="whitespace-pre-line">{aboutData.journeyContent}</p>
        )}

        {isEditing && (
          <>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={aboutData.imageUrl}
              onChange={(e) => handleInputChange(e, 'imageUrl')}
              placeholder="Journey Image URL"
            />
            <p className="text-sm text-gray-500">Current image URL: {aboutData.imageUrl}</p>
          </>
        )}

        {aboutData.imageUrl && (
          <img
            src={aboutData.imageUrl}
            alt="Journey"
            className="mt-4 rounded-xl w-full max-w-md"
          />
        )}
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Cards (Mission/Vision/Commitment)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutData.cards.map((card, idx) => (
            <div key={idx} className="border p-4 rounded-xl mb-4">
              {isEditing ? (
                <>
                  <input
                    className="border p-2 w-full mb-2"
                    value={card.title}
                    onChange={(e) => handleInputChange(e, `cards[${idx}].title`)}
                    placeholder="Card Title"
                  />
                  <textarea
                    className="border p-2 w-full mb-2"
                    value={card.description}
                    onChange={(e) => handleInputChange(e, `cards[${idx}].description`)}
                    placeholder="Card Description"
                  />
                  <input
                    className="border p-2 w-full mb-2"
                    value={card.image}
                    onChange={(e) => handleInputChange(e, `cards[${idx}].image`)}
                    placeholder="Image URL"
                  />
                  <p className="text-sm text-gray-500">Current image URL: {card.image}</p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="whitespace-pre-line">{card.description}</p>
                </>
              )}
              {card.image && (
                <img
                  src={card.image}
                  alt={`Card ${idx + 1}`}
                  className="rounded-xl w-full max-w-sm mt-2"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Impact Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(aboutData.impact).map(([key, value]) => (
            <div key={key} className="mb-2">
              <label className="capitalize font-semibold block">{key}</label>
              {isEditing ? (
                <input
                  className="border p-2 w-full"
                  value={value}
                  onChange={(e) => handleInputChange(e, `impact.${key}`)}
                />
              ) : (
                <div className="text-2xl font-bold">{value}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EditableAboutUs;
