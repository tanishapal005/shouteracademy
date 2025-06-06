import  { useState, useEffect } from 'react';
import { FaCog, FaSave, FaImage, FaEdit, FaTimes, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const HeroSliderEditor = ({ slides, handleChange, addSlide, removeSlide, saveSlides, isLoading }) => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Edit Hero Section Slides</h2>
      {slides.map((slide, index) => (
        <div key={index} className="border p-4 rounded space-y-2">
          <input
            type="text"
            value={slide.title}
            placeholder="Title"
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            value={slide.description}
            placeholder="Description"
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={slide.image}
            placeholder="Image URL"
            onChange={(e) => handleChange(index, "image", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={slide.primaryButtonText}
            placeholder="Primary Button Text"
            onChange={(e) => handleChange(index, "primaryButtonText", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={slide.secondaryButtonText}
            placeholder="Secondary Button Text"
            onChange={(e) => handleChange(index, "secondaryButtonText", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button 
            onClick={() => removeSlide(index)} 
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button 
        onClick={addSlide} 
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Slide
      </button>

      <button 
        onClick={saveSlides} 
        disabled={isLoading}
        className={`bg-blue-600 text-white px-6 py-2 rounded ${isLoading ? 'opacity-50' : ''}`}
      >
        {isLoading ? 'Saving...' : 'Save Slides'}
      </button>
    </div>
  );
};


const AdminPanel = () => {
  const initialData = {
    homePage: {
      hero: {
        title: "Learn from Experts, Excel in Your Career",
        subtitle: "Practical mentorship programs designed by top industry professionals & real-world projects to make you job-ready:",
        primaryBtn: "Explore Programs",
        secondaryBtn: "Book Mentor Session",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        slides: [
          {
            title: "Learn from Experts, Excel in Your Career",
            description: "Practical mentorship programs designed by top industry professionals & real-world projects to make you job-ready:",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
            primaryButtonText: "Explore Programs",
            secondaryButtonText: "Book Mentor Session"
          }
        ]
      }
    },
    courses: {
      digitalMarketing: {
        title: "Digital Marketing",
        description: "Master digital marketing strategies to grow businesses online",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          fullStackMarketing: {
            title: "Full Stack Marketing",
            description: "Comprehensive training covering all aspects of digital marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80"
          },
performanceMarketing: {
            title: "Performance Marketing",
            description:
              "Learn data-driven marketing strategies for maximum ROI",
            image:
              "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          seo: {
            title: "SEO Specialization",
            description: "Master search engine optimization techniques",
            image:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          socialMediaMarketing: {
            title: "Social Media Marketing",
            description:
              "Strategies for Facebook, Instagram, LinkedIn and more",
            image:
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
          },
        },
      },
      webDevelopment: {
        title: "Web Development",
        description: "Become a full-stack web developer with our programs",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
        subcategories: {
          fullStack: {
            title: "Full Stack Development",
            description: "Learn both frontend and backend technologies",
            image:
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          mernStack: {
            title: "MERN Stack",
            description: "Master MongoDB, Express, React, and Node.js",
            image:
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          lampStack: {
            title: "LAMP Stack",
            description: "Learn Linux, Apache, MySQL, and PHP",
            image:
              "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
          },
          django: {
            title: "Django Development",
            description: "Python web development with Django framework",
            image:
              "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
      cmsDevelopment: {
        title: "CMS Development",
        description: "Learn popular content management systems",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
        subcategories: {
          wordpress: {
            title: "WordPress Development",
            description: "Build websites with WordPress",
            image:
              "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          shopify: {
            title: "Shopify Development",
            description: "Create e-commerce stores with Shopify",
            image:
              "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          drupal: {
            title: "Drupal Development",
            description: "Build enterprise websites with Drupal",
            image:
              "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          joomla: {
            title: "Joomla Development",
            description: "Create dynamic websites with Joomla",
            image:
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
          },
        },
      },
      designCourses: {
        title: "Designing Courses",
        description: "Master visual communication and digital design",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          graphicDesign: {
            title: "Full Stack Graphic Design",
            description:
              "Comprehensive training in all aspects of graphic design",
            image:
              "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          uiUxDesign: {
            title: "UI/UX Design",
            description: "User interface and experience design principles",
            image:
              "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          videoEditing: {
            title: "Video Editing",
            description: "Professional video editing and post-production",
            image:
              "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
          },
          motionGraphics: {
            title: "Motion Graphics",
            description: "Create engaging animations and visual effects",
            image:
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
      appDevelopment: {
        title: "App Development",
        description: "Build mobile applications for iOS and Android",
        image:
          "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          flutter: {
            title: "Flutter Development",
            description: "Cross-platform apps with Flutter",
            image:
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          androidDevelopment: {
            title: "Android Development",
            description: "Native Android app development with Kotlin",
            image:
              "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          iosDevelopment: {
            title: "iOS Development",
            description: "Native iOS app development with Swift",
            image:
              "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          reactNative: {
            title: "React Native",
            description: "Cross-platform apps with JavaScript",
            image:
              "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
      dataScience: {
        title: "Data Science",
        description: "Master data analysis and machine learning",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          machineLearning: {
            title: "Machine Learning",
            description: "Learn predictive modeling and AI algorithms",
            image:
              "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
          },
          dataAnalysis: {
            title: "Data Analysis",
            description: "Master data visualization and statistics",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
          },
          bigData: {
            title: "Big Data",
            description: "Handle large datasets with Hadoop and Spark",
            image:
              "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1465&q=80",
          },
          dataEngineering: {
            title: "Data Engineering",
            description: "Build data pipelines and infrastructure",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
      cloudComputing: {
        title: "Cloud Computing",
        description: "Learn cloud platforms and deployment strategies",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          aws: {
            title: "AWS Certification",
            description: "Amazon Web Services training and certification",
            image:
              "https://images.unsplash.com/photo-1620287343716-8f653eaa2229?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          azure: {
            title: "Microsoft Azure",
            description: "Cloud solutions with Microsoft Azure",
            image:
              "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          googleCloud: {
            title: "Google Cloud",
            description: "Google Cloud Platform services and solutions",
            image:
              "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
          },
          devOps: {
            title: "DevOps",
            description: "CI/CD pipelines and infrastructure as code",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
      cyberSecurity: {
        title: "Cyber Security",
        description: "Learn to secure systems and networks",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        subcategories: {
          ethicalHacking: {
            title: "Ethical Hacking",
            description: "Penetration testing and security assessment",
            image:
              "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          networkSecurity: {
            title: "Network Security",
            description: "Secure network infrastructure and protocols",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          cryptography: {
            title: "Cryptography",
            description: "Encryption algorithms and secure communications",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
          cyberForensics: {
            title: "Cyber Forensics",
            description: "Digital investigation and evidence collection",
            image:
              "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          },
        },
      },
    },
  };


  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState('homePage');
  const [activeSection, setActiveSection] = useState('hero');
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCourseHover = (course) => {
    setOpenDropdown(course);
  };

  const handleCourseLeave = () => {
    setOpenDropdown(null);
  };

  const handleInputChange = (e, path) => {
    const { name, value } = e.target;

    setData(prev => {
      const newData = { ...prev };
      let current = newData;

      for (const key of path) {
        current = current[key];
      }

      current[name] = value;
      return newData;
    });
  };

  const handleSlideChange = (index, field, value) => {
    setData(prev => {
      const newData = { ...prev };
      newData.homePage.hero.slides[index][field] = value;
      return newData;
    });
  };

  const addSlide = () => {
    setData(prev => {
      const newData = { ...prev };
      newData.homePage.hero.slides.push({
        title: '',
        description: '',
        image: '',
        primaryButtonText: '',
        secondaryButtonText: '',
      });
      return newData;
    });
  };

  const removeSlide = (index) => {
    setData(prev => {
      const newData = { ...prev };
      newData.homePage.hero.slides = newData.homePage.hero.slides.filter((_, i) => i !== index);
      return newData;
    });
  };

  const handleImageChange = (e, path) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);

        setData(prev => {
          const newData = { ...prev };
          let current = newData;

          for (const key of path) {
            current = current[key];
          }

          current.image = reader.result;
          return newData;
        });
      };
      reader.readAsDataURL(file);
    }
  };

const saveSlides = async () => {
  try {
    setIsLoading(true);
    console.log("Sending slides:", data.homePage.hero.slides);

   const response = await axios.put("http://localhost:5000/api/hero-section", {
 
      slides: data.homePage.hero.slides,
    });

    alert(response.data.message || "Slides updated successfully!");
  } catch (err) {
    console.error("Save failed", err);
    alert(err.message || "Failed to save slides. Please check console for details.");
  } finally {
    setIsLoading(false);
  }
};

  const handleSave = async () => {
    try {
      setIsLoading(true);
      console.log("Saving data:", data);
      alert("Changes saved successfully!");
      setIsEditing(false);
      setPreviewImage('');
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save changes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setData(initialData);
    setPreviewImage('');
    setIsEditing(false);
  };

  const getCurrentData = () => {
    if (activeTab === 'homePage') {
      return data.homePage[activeSection];
    } else if (activeTab === 'courses' && activeCourse) {
      if (activeSubcategory) {
        return data.courses[activeCourse].subcategories[activeSubcategory];
      }
      return data.courses[activeCourse];
    }
    return {};
  };

  const renderHeroSliderEditor = () => {
    return (
      <HeroSliderEditor
        slides={data.homePage.hero.slides}
        handleChange={handleSlideChange}
        addSlide={addSlide}
        removeSlide={removeSlide}
        saveSlides={saveSlides}
      />
    );
  };

  const renderEditor = () => {
    const currentData = getCurrentData();
    const path = activeTab === 'homePage'
      ? ['homePage', activeSection]
      : activeSubcategory
        ? ['courses', activeCourse, 'subcategories', activeSubcategory]
        : ['courses', activeCourse];

    if (activeTab === 'homePage' && activeSection === 'hero') {
      return renderHeroSliderEditor();
    }

    return (
      <div className={`space-y-4 ${!isEditing ? 'opacity-50' : ''}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={currentData.title || ''}
            onChange={(e) => handleInputChange(e, path)}
            disabled={!isEditing}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={currentData.description || currentData.subtitle || ''}
            onChange={(e) => handleInputChange(e, path)}
            disabled={!isEditing}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <div className="flex flex-col gap-2">
            <label className={`flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg ${isEditing ? 'cursor-pointer hover:bg-gray-50' : ''}`}>
              <div className="flex items-center gap-2">
                <FaImage className="text-gray-400" />
                <span className="text-sm text-gray-500">
                  {isEditing ? 'Click to upload new image' : 'Current image'}
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, path)}
                disabled={!isEditing}
                className="hidden"
              />
            </label>
            {(currentData.image || previewImage) && (
              <div className="mt-2 text-xs text-gray-500">
                Image preview (recommended size: 1200×600px)
              </div>
            )}
          </div>
        </div>

        {activeTab === 'homePage' && activeSection === 'hero' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Button</label>
              <input
                type="text"
                name="primaryBtn"
                value={currentData.primaryBtn || ''}
                onChange={(e) => handleInputChange(e, path)}
                disabled={!isEditing}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Button</label>
              <input
                type="text"
                name="secondaryBtn"
                value={currentData.secondaryBtn || ''}
                onChange={(e) => handleInputChange(e, path)}
                disabled={!isEditing}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPreview = () => {
    const currentData = getCurrentData();
    const isHero = activeTab === 'homePage' && activeSection === 'hero';

    if (isHero) {
      return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Slider Live Preview</h3>
          <div className="space-y-4">
            {data.homePage.hero.slides.map((slide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{slide.title || 'Slide Title'}</h2>
                <p className="text-gray-600 mb-4">{slide.description || 'Slide description'}</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
                    {slide.primaryButtonText || 'Primary Button'}
                  </button>
                  <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg">
                    {slide.secondaryButtonText || 'Secondary Button'}
                  </button>
                </div>
                {slide.image && (
                  <img 
                    src={slide.image} 
                    alt="Slide preview" 
                    className="mt-4 w-full h-48 object-cover rounded-lg" 
                  />
                )}
                <div className="mt-2 text-xs text-gray-500 text-center">Slide {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Live Preview</h3>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{currentData.title || 'Title'}</h2>
            <p className="text-gray-600 mb-4">{currentData.description || currentData.subtitle || 'Description'}</p>
            {isHero && (
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
                  {currentData.primaryBtn || 'Primary Button'}
                </button>
                <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg">
                  {currentData.secondaryBtn || 'Secondary Button'}
                </button>
              </div>
            )}
          </div>
          <div className="border rounded-lg overflow-hidden">
            {previewImage || currentData.image ? (
              <img
                src={previewImage || currentData.image}
                alt="Preview"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                No image selected
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-7xl my-8 ml-64 mt-16">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <FaCog className="text-blue-600" /> Admin Panel
        </h2>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              >
                <FaTimes /> Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                <FaSave /> {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaEdit /> Edit Content
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col relative">
        <div className="flex overflow-x-auto pb-2 mb-6 relative">
          <button
            onClick={() => {
              setActiveTab('homePage');
              setActiveSection('hero');
              setActiveCourse(null);
              setActiveSubcategory(null);
              setOpenDropdown(null);
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-t-lg ${activeTab === 'homePage' ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}
          >
            Home Page
          </button>

          {Object.keys(data.courses).map((course) => (
            <div
              key={course}
              className="relative"
              onMouseEnter={() => handleCourseHover(course)}
              onMouseLeave={handleCourseLeave}
            >
              <button
                onClick={() => {
                  setActiveTab('courses');
                  setActiveCourse(course);
                  setActiveSubcategory(null);
                  setOpenDropdown(openDropdown === course ? null : course);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-t-lg flex items-center ${activeCourse === course ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' : 'hover:bg-gray-100'}`}
              >
                {data.courses[course].title}
                <FaChevronRight className={`ml-1 text-xs transition-transform ${openDropdown === course ? 'transform rotate-90' : ''}`} />
              </button>

              {openDropdown === course && (
                <div className="left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  {Object.keys(data.courses[course].subcategories).map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => {
                        setActiveTab('courses');
                        setActiveCourse(course);
                        setActiveSubcategory(subcategory);
                        setOpenDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${activeSubcategory === subcategory ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      {data.courses[course].subcategories[subcategory].title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              {activeTab === 'homePage' ? 'Home Page Settings' :
                activeSubcategory ? `${data.courses[activeCourse].title} - ${data.courses[activeCourse].subcategories[activeSubcategory].title}` :
                  `${data.courses[activeCourse]?.title} Settings`}
            </h3>
            {renderEditor()}
          </div>

          <div className="lg:w-1/2">
            {renderPreview()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;