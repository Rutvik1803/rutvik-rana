import Hero from "./components/Hero";
import SparklesPreview from "./components/SparklesPreview";

function App() {
  return (
    <SparklesPreview>
      {/* Application Content */}
      <div className="relative z-10 text-white">
        {/* Hero Section */}
        <Hero />
      </div>
    </SparklesPreview>
  );
}

export default App;
