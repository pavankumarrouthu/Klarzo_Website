
import { Brain, MessageCircle, Heart } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Klarzo Approach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every step with Klarzo is a gentle upward movement—here's your calm, guided journey to mental success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Feature 1 */}
          <div className="p-6 text-center">
            <div className="feature-icon mx-auto">
              <MessageCircle size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2">Share What's On Your Mind</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Type freely, no judgments.</li>
              <li>• Start with any emotion, any time.</li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="p-6 text-center">
            <div className="feature-icon mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Klarzo Gently Listens</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Reads and reflects what you wrote.</li>
              <li>• Asks caring follow-ups.</li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="p-6 text-center">
            <div className="feature-icon mx-auto">
              <Brain size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2">Spot New Insights</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Offers perspective and gentle reframing.</li>
              <li>• Highlights patterns.</li>
            </ul>
          </div>
          
          {/* Feature 4 */}
          <div className="p-6 text-center">
            <div className="feature-icon mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11Z" fill="currentColor"/>
                <path d="M15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11Z" fill="currentColor"/>
                <path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Try Calming Actions</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Guided grounding or breathing exercises.</li>
              <li>• Choose supportive next steps.</li>
            </ul>
          </div>
          
          {/* Feature 5 */}
          <div className="p-6 text-center">
            <div className="feature-icon mx-auto">
              <Heart size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2">Feel Relief & Growth</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• Celebrate your progress.</li>
              <li>• Come back any time!</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-lg text-gray-700">
          Calm, clarity, and self-growth—at your own pace with Klarzo.
        </div>
      </div>
    </section>
  );
};

export default Features;
