
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 md:px-10 bg-mindful-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Klarzo AI</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our AI companion is transforming mental health support through technology and compassion.
          </p>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              At Klarzo, we believe everyone deserves access to mental health support that's affordable, 
              private, and available whenever needed. Our mission is to leverage AI technology to provide 
              compassionate mental wellness assistance to people around the world.
            </p>
            
            <h2>How Klarzo Works</h2>
            <p>
              Klarzo is powered by advanced artificial intelligence designed specifically for mental health 
              conversations. Our AI has been trained on evidence-based therapeutic approaches including:
            </p>
            <ul>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Mindfulness techniques</li>
              <li>Journaling and self-reflection strategies</li>
              <li>Active listening principles</li>
            </ul>
            
            <div className="bg-gray-50 p-8 rounded-lg my-8">
              <h3>Important Note</h3>
              <p>
                Klarzo is not a replacement for professional mental health treatment. If you're experiencing a 
                crisis or need immediate help, please contact a qualified mental health professional or 
                crisis service.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" className="text-mindful-700 border-mindful-300">
                  <Link to="/crisis">
                    Crisis Resources →
                  </Link>
                </Button>
              </div>
            </div>
            
            <h2>Our Technology</h2>
            <p>
              Klarzo uses natural language processing to understand the nuances of human communication. 
              This allows our AI to respond with empathy and provide personalized support based on your 
              specific situation and needs.
            </p>
            
            <h2>Privacy & Security</h2>
            <p>
              Your privacy is our top priority. All conversations with Klarzo are private and encrypted. 
              We never share your personal information with third parties, and you have complete control 
              over your data.
            </p>
            
            <h2>Join Us on the Journey</h2>
            <p>
              We're continuously improving Klarzo with feedback from users and mental health professionals. 
              Our goal is to create the most helpful and supportive mental wellness companion possible.
            </p>
            
            <div className="mt-8 text-center">
              <Button asChild className="bg-mindful-500 hover:bg-mindful-600 text-white rounded-full px-8 py-6 text-lg">
                <Link to="/talk">
                  Start Your Journey with Klarzo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
