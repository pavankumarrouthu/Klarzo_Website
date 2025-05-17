
import { Brain, MessageCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ThreeStepApproach = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Three-Step Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've designed a comprehensive system to support your mental health journey at every stage, 
            from self-help to professional intervention when needed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Step 1: Self-Assessment */}
          <Card className="border border-klarzo-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-klarzo-100 flex items-center justify-center mb-4">
                <Brain className="text-klarzo-500" size={28} />
              </div>
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-klarzo-100 text-klarzo-500 rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">1</span>
                Self-Assessment & Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Begin with a comprehensive mental health assessment using our guided survey with emotional, 
                behavioral, and cognitive inputs.
              </p>
              <p className="text-gray-600 mb-4">
                Our AI analyzes your responses and recommends a personalized self-help course tailored to your needs.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>Journaling exercises</li>
                <li>CBT techniques</li>
                <li>Breathing & meditation</li>
                <li>Habit tracking tools</li>
                <li>Goal-setting frameworks</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Step 2: AI Therapist */}
          <Card className="border border-klarzo-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-klarzo-100 flex items-center justify-center mb-4">
                <MessageCircle className="text-klarzo-500" size={28} />
              </div>
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-klarzo-100 text-klarzo-500 rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">2</span>
                Voice-Based AI Therapist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If your progress stalls or distress increases, connect with our voice-based AI therapist for real-time support.
              </p>
              <p className="text-gray-600 mb-4">
                Engage in natural, therapeutic conversations with an AI that listens, speaks, and responds with empathy.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>Speech analysis technology</li>
                <li>Emotion recognition</li>
                <li>Stress pattern detection</li>
                <li>Guided coping strategies</li>
                <li>24/7 availability</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Step 3: Human Experts */}
          <Card className="border border-klarzo-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-klarzo-100 flex items-center justify-center mb-4">
                <Users className="text-klarzo-500" size={28} />
              </div>
              <CardTitle className="text-xl font-bold flex items-center">
                <span className="bg-klarzo-100 text-klarzo-500 rounded-full w-7 h-7 flex items-center justify-center mr-2 text-sm">3</span>
                Human Expert Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                When our AI detects patterns requiring professional help, we immediately escalate to our network of experts.
              </p>
              <p className="text-gray-600 mb-4">
                Get connected to licensed psychologists, psychiatrists, or counselors based on your specific needs.
              </p>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>Smart triage system</li>
                <li>Pre-vetted professional network</li>
                <li>Urgent case prioritization</li>
                <li>Seamless referral process</li>
                <li>Continued support integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepApproach;
