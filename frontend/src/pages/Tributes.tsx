
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // In a real application, this would come from a database
// const allTributes = [
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
//   },
//   {
//     id: 4,
//     name: "Ngozi Eze",
//     relationship: "Neighbor",
//     message: "Sir Cosmas was the definition of a good man. He always had time to listen and offer advice. Our community has lost a true pillar."
//   },
//   {
//     id: 5,
//     name: "Pastor Emmanuel Okafor",
//     relationship: "Church Member",
//     message: "Brother Cosmas served God with all his heart. His faith was unwavering, and his dedication to church activities was exemplary. May he find rest in the bosom of the Lord."
//   },
//   {
//     id: 6,
//     name: "Chinyere Ugwu",
//     relationship: "Family",
//     message: "Uncle Cosmas was more than just a relative; he was a father figure to many of us. His love, guidance, and support shaped who we are today. We will forever cherish his memory."
//   },
//   {
//     id: 7,
//     name: "Dr. Olusegun Adeyemi",
//     relationship: "Former Student",
//     message: "Sir Cosmas was the teacher who believed in me when I didn't believe in myself. His mentorship changed the trajectory of my life. I am forever grateful."
//   },
//   {
//     id: 8,
//     name: "Chief (Mrs.) Ifeoma Okeke",
//     relationship: "Community Leader",
//     message: "Our community has lost a true son of the soil. Sir Cosmas contributed immensely to our development projects and was always ready to serve. His legacy lives on in the lives he touched."
//   }
// ];

// const TRIBUTES_PER_PAGE = 6;

// const Tributes = () => {
  
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
  
//   const indexOfLastTribute = currentPage * TRIBUTES_PER_PAGE;
//   const indexOfFirstTribute = indexOfLastTribute - TRIBUTES_PER_PAGE;
//   const currentTributes = allTributes.slice(indexOfFirstTribute, indexOfLastTribute);
//   const totalPages = Math.ceil(allTributes.length / TRIBUTES_PER_PAGE);
  
//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="min-h-screen py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <Header />
        
//         <div className="my-10">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-semibold">Tributes & Condolences</h1>
//             <Button 
//               onClick={() => navigate("/")} 
//               variant="outline"
//               className="border-gold text-gold hover:bg-gold hover:text-white"
//             >
//               Back to Memorial
//             </Button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {currentTributes.map((tribute) => (
//               <Card key={tribute.id} className="border border-gray-200 hover:shadow-md transition-shadow">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-lg">{tribute.name}</CardTitle>
//                   <CardDescription>{tribute.relationship}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm italic">"{tribute.message}"</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           {totalPages > 1 && (
//             <Pagination className="my-8">
//               <PaginationContent>
//                 {currentPage > 1 && (
//                   <PaginationItem>
//                     <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
//                   </PaginationItem>
//                 )}
                
//                 {Array.from({ length: totalPages }).map((_, index) => (
//                   <PaginationItem key={index}>
//                     <PaginationLink 
//                       isActive={currentPage === index + 1}
//                       onClick={() => handlePageChange(index + 1)}
//                     >
//                       {index + 1}
//                     </PaginationLink>
//                   </PaginationItem>
//                 ))}
                
//                 {currentPage < totalPages && (
//                   <PaginationItem>
//                     <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
//                   </PaginationItem>
//                 )}
//               </PaginationContent>
//             </Pagination>
//           )}
//         </div>
        
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Tributes;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TRIBUTES_PER_PAGE = 6;

const Tributes = () => {
  const navigate = useNavigate();
  
  // State for tributes, loading, and error
  const [tributes, setTributes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch tributes on mount
  useEffect(() => {
    axios.get('/api/tributes')
      .then((response) => {
        setTributes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tributes:", err);
        setError("Failed to load tributes. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Pagination setup
  const indexOfLastTribute = currentPage * TRIBUTES_PER_PAGE;
  const indexOfFirstTribute = indexOfLastTribute - TRIBUTES_PER_PAGE;
  const currentTributes = tributes.slice(indexOfFirstTribute, indexOfLastTribute);
  const totalPages = Math.ceil(tributes.length / TRIBUTES_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />

        <div className="my-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold">Tributes & Condolences</h1>
            <Button 
              onClick={() => navigate("/")} 
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              Back to Memorial
            </Button>
          </div>

          {loading ? (
            <p>Loading tributes...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentTributes.map((tribute) => (
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

              {totalPages > 1 && (
                <Pagination className="my-8">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}

                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          isActive={currentPage === index + 1}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Tributes;

