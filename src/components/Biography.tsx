
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Biography: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto my-8 px-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <Card className="border border-gold-light shadow-md ornament">
        <CardHeader className="border-b border-gold-light/30">
          <CardTitle className="text-2xl font-semibold text-center">Biography</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 px-4 md:px-8">
          <p className="text-lg leading-relaxed mb-4">
            Sir Cosmas Chibueze Ugwoke was a distinguished community leader, loving husband, devoted father, and cherished grandfather. Born in Enugu State, Nigeria in 1955, he dedicated his life to public service and education.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            After graduating from the University of Nigeria with honors, he established a career in civil service where he rose to prominence through his exceptional work ethic and unwavering integrity. His contributions to educational reform earned him recognition both locally and internationally.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of his professional achievements, Sir Cosmas was known for his philanthropic efforts, particularly in supporting education for underprivileged children. His legacy lives on through his family, the countless lives he touched, and the community institutions he helped build.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Biography;
