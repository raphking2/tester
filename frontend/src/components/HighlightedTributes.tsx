
// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// const tributes = [
//   {
//     id: 1,
//     name: "James Okonkwo",
//     relationship: "Family Friend",
//     message: "Sir Cosmas was a beacon of light in our community. His wisdom and kindness touched many lives, and his legacy will continue to inspire generations to come."
//   },
//   {
//     id: 2,
//     name: "Dr. Elizabeth Adebayo",
//     relationship: "Colleague",
//     message: "Working alongside Sir Cosmas was an honor. His dedication to excellence and his unwavering integrity set a standard for all of us. He will be deeply missed."
//   },
//   {
//     id: 3,
//     name: "Chief Michael Nwosu",
//     relationship: "Friend",
//     message: "My dear friend Cosmas lived a life worth celebrating. His generosity knew no bounds, and his smile could brighten the darkest room. May his soul rest in perfect peace."
//   }
// ];

// const HighlightedTributes = () => {
//   const [tributes, setTributes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTributes = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/tributes');
//         setTributes(response.data);
//       } catch (err) {
//         setError('Failed to load tributes');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTributes();
//   }, []);

//   if (loading) return <div className="text-center">Loading tributes...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;


//   return (
//     <div className="my-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//       <h2 className="text-2xl font-semibold text-center mb-8">What People Are Saying</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {tributes.map((tribute) => (
//           <Card key={tribute.id} className="border border-gray-200 hover:shadow-md transition-shadow">
//             <CardHeader className="pb-2">
//               <CardTitle className="text-lg">{tribute.name}</CardTitle>
//               <CardDescription>{tribute.relationship}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm italic">"{tribute.message}"</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
      
//       <div className="text-center mt-8">
//         <Button 
//           onClick={() => navigate("/tributes")}
//           variant="outline" 
//           className="border-gold text-gold hover:bg-gold hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
//         >
//           View All Tributes
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HighlightedTributes;

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const HighlightedTributes = () => {
  const [tributes, setTributes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTributes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tributes`);
        setTributes(response.data);
      } catch (err) {
        setError('Failed to load tributes');
      } finally {
        setLoading(false);
      }
    };

    fetchTributes();
  }, []);

  if (loading) return <div className="text-center">Loading tributes...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Render only the first 3 tributes.
  const displayedTributes = tributes.slice(0, 3);

  return (
    <div className="my-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl font-semibold text-center mb-8">What People Are Saying</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedTributes.map((tribute) => (
          <Card key={tribute.id} className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{tribute.name}</CardTitle>
              <CardDescription>{tribute.relationship}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm italic">"{tribute.message}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button 
          onClick={() => navigate("/tributes")}
          variant="outline" 
          className="border-gold text-gold hover:bg-gold hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
        >
          View All Tributes
        </Button>
      </div>
    </div>
  );
};

export default HighlightedTributes;

