import React, { useState } from 'react';
import './App.css';
import Navbar from './Nav_bar';
import HeadingWithButton from './Heading_with_button';
import Card from './Card';
import Slider from './Sliders';
import Footer from './Footer';

function App() {
  const [showDataAnalysisInfo, setShowDataAnalysisInfo] = useState(false);
  const [showWebTechInfo, setShowWebTechInfo] = useState(false);
  const [showBlockchainInfo, setShowBlockchainInfo] = useState(false);

  const dataAnalysisCards = [
    {
      imageSrc: "https://as1.ftcdn.net/v2/jpg/09/92/95/52/1000_F_992955234_kNNCG4CZlSaMMdnK9mSv2BDTYByF2W9f.jpg",
      title: "Data Analysis - Neural Network Flow",
      description: "Neural networks are computing systems inspired by biological neural networks. They can learn to perform tasks by considering examples, generally without being programmed with task-specific rules.",
      details: "Key concepts include:\n• Input layers\n• Hidden layers\n• Output layers\n• Weights and biases\n• Activation functions\n• Backpropagation"
    },
    {
      imageSrc: "https://as1.ftcdn.net/v2/jpg/10/26/14/60/1000_F_1026146085_4SJIDTNnmguZfcBVzu8NjtkXnxsnhgFJ.jpg",
      title: "Data Analysis - Data Visualisation",
      description: "Data visualization is the graphical representation of information and data using visual elements like charts, graphs, and maps.",
      details: "Common visualization types:\n• Bar charts\n• Line graphs\n• Scatter plots\n• Heat maps\n• Pie charts\n• Box plots"
    },
    {
      imageSrc: "https://as1.ftcdn.net/v2/jpg/09/33/75/76/1000_F_933757693_gJzR3OD9S9zjMiZH7ZWB3a7idC87Rqrf.jpg",
      title: "Data Analysis - Power BI",
      description: "Power BI is a business analytics service by Microsoft that provides interactive visualizations with self-service business intelligence capabilities.",
      details: "Features include:\n• Data modeling\n• DAX formulas\n• Custom visualizations\n• Real-time analytics\n• Cloud integration\n• Mobile access"
    },
    {
      imageSrc: "https://as2.ftcdn.net/v2/jpg/08/66/20/21/1000_F_866202194_KoYbJpfkvWy72oXMepch0Seln1jVobtB.jpg",
      title: "Data Analysis - Use of pandas Library",
      description: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of Python.",
      details: "Key functionalities:\n• DataFrame operations\n• Data cleaning\n• Data merging\n• Time series analysis\n• Data filtering\n• Statistical functions"
    },
    {
      imageSrc: "https://as2.ftcdn.net/v2/jpg/08/47/23/57/1000_F_847235742_eRLl7goDWYNghvmXXzNdq1L5Kvz849TJ.jpg",
      title: "Data Analysis - Numpy Library",
      description: "NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices.",
      details: "Core features:\n• Array operations\n• Mathematical functions\n• Linear algebra\n• Fourier transforms\n• Random number generation\n• Broadcasting capabilities"
    }
  ];

  const webTechCards = [
    {
      imageSrc: "https://images.javatpoint.com/blog/images/mern-stack.png",
      title: "Web Technology - MERN Stack",
      description: "MERN Stack is a JavaScript stack that's designed to make the development process smoother.",
      details: "Components:\n• MongoDB for database\n• Express.js for backend\n• React for frontend\n• Node.js for runtime\n• RESTful API architecture\n• JSON data format"
    },
    {
      imageSrc: "https://www.pixelcrayons.com/blog/wp-content/uploads/2023/05/2-4.jpg.webp",
      title: "Web Technology - MEAN Stack",
      description: "MEAN is a full-stack JavaScript solution that helps you build fast, robust, and maintainable web applications.",
      details: "Stack includes:\n• MongoDB database\n• Express.js framework\n• Angular frontend\n• Node.js runtime\n• TypeScript support\n• Built-in CLI tools"
    },
    {
      imageSrc: "https://wsrv.nl/?url=https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/10/08203345/MEVN.png&w=1280&q=82&output=webp",
      title: "Web Technology - MEVN Stack",
      description: "MEVN stack is a collection of JavaScript-based technologies used to develop web applications.",
      details: "Features:\n• MongoDB database\n• Express.js backend\n• Vue.js frontend\n• Node.js server\n• Vue Router\n• Vuex state management"
    },
    {
      imageSrc: "https://framerusercontent.com/images/NyNbZphv5XijYZ4IGvIom14aE.png?scale-down-to=1024",
      title: "Web Technology - AI with MERN",
      description: "Integration of AI capabilities with MERN stack for intelligent web applications.",
      details: "Applications:\n• Machine learning models\n• Natural language processing\n• Image recognition\n• Chatbots\n• Recommendation systems\n• Predictive analytics"
    },
    {
      imageSrc: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/10/06001134/Generative-AI-tech-stack.png",
      title: "Web Technology - AI with MEAN",
      description: "Combining AI technologies with MEAN stack for building intelligent web applications.",
      details: "Features:\n• TensorFlow.js integration\n• Neural networks\n• Deep learning models\n• Real-time processing\n• Computer vision\n• Speech recognition"
    }
  ];

  const blockchainCards = [
    {
      imageSrc: "https://www.tutorialspoint.com/solidity/images/solidity.jpg",
      title: "Blockchain - Solidity",
      description: "Solidity is an object-oriented programming language for writing smart contracts on various blockchain platforms.",
      details: "Key features:\n• Contract creation\n• Function modifiers\n• Events and logging\n• Error handling\n• Gas optimization\n• Security patterns"
    },
    {
      imageSrc: "https://imgs.search.brave.com/Dlk3OCwxPuFNpU7mFUrMREWHzrkTsXBkcne3NnZ0Hlo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iL3RV/aENIZVN0QV81czE3/OVo4bkN3X1RyN0Fk/ST0vMzg0MHgyMTYw/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpL0dyZWVuYmxv/Y2tjaGFpbi1kYmQx/MTQ2YzliNTI0YWJi/OTNhODFmYTZmYWYw/YzJmNy5qcGc",
      title: "Blockchain - Blockchain essentials",
      description: "Fundamental concepts and principles of blockchain technology.",
      details: "Core concepts:\n• Distributed ledger\n• Consensus mechanisms\n• Cryptography\n• Smart contracts\n• Mining\n• Token economics"
    },
    {
      imageSrc: "https://www.weusecoins.com/images/bitcoinicons/mining.png",
      title: "Blockchain - Miner in the system of blockchain",
      description: "Understanding the role and importance of miners in blockchain networks.",
      details: "Mining aspects:\n• Proof of Work\n• Hash functions\n• Block validation\n• Network security\n• Mining pools\n• Hardware requirements"
    },
    {
      imageSrc: "https://developers.moralis.com/wp-content/uploads/2024/05/Blog-What-is-Ethers-Vs-Web3-JS.jpg",
      title: "Blockchain - Ether js developer",
      description: "ethers.js is a complete Ethereum wallet implementation and utilities in JavaScript.",
      details: "Features:\n• Wallet management\n• Contract interaction\n• Transaction handling\n• Event listening\n• ENS support\n• Provider abstraction"
    },
    {
      imageSrc: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/b621f7be9e68a8dcd89609ea21f0e552.jpg",
      title: "Blockchain - Blockchain and IoT",
      description: "Integration of blockchain technology with Internet of Things (IoT) devices and networks.",
      details: "Applications:\n• Device security\n• Data integrity\n• Smart contracts\n• Supply chain\n• Asset tracking\n• Decentralized networks"
    }
  ];

  const toggleDataAnalysisInfo = () => {
    setShowDataAnalysisInfo(!showDataAnalysisInfo);
  };

  const toggleWebTechInfo = () => {
    setShowWebTechInfo(!showWebTechInfo);
  };

  const toggleBlockchainInfo = () => {
    setShowBlockchainInfo(!showBlockchainInfo);
  };

  return (
    <div className="container">
      <Navbar />
      <h1>Hi there!!!</h1>

      <HeadingWithButton title="Introduction to Data Analysis" buttonText="See More" onClick={toggleDataAnalysisInfo} />
      <div className="cards-container">
        {dataAnalysisCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
      </div>
      {showDataAnalysisInfo && <div className="info-text">Data analysis involves inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, concluding, and supporting decision-making.</div>}

      <Slider />

      <HeadingWithButton title="Introduction to Web Technology" buttonText="See More" onClick={toggleWebTechInfo} />
      <div className="cards-container">
        {webTechCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
      </div>
      {showWebTechInfo && <div className="info-text">Web technology refers to the various tools and methods used to create and manage websites. It includes HTML, CSS, JavaScript, and backend technologies such as databases and server-side programming.</div>}

      <HeadingWithButton title="Introduction to Blockchain" buttonText="See More" onClick={toggleBlockchainInfo} />
      <div className="cards-container">
        {blockchainCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            details={card.details}
          />
        ))}
      </div>
      {showBlockchainInfo && <div className="info-text">Blockchain is a distributed ledger technology that allows data to be stored across a network of computers, providing high security, transparency, and the potential to eliminate intermediaries in transactions.</div>}

      <Footer />
    </div>
  );
}

export default App;