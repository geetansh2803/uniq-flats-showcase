import { Phone, MapPin, Mail, Wifi, Car, Shield, Utensils, Tv, Wind, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const contactNumbers = ["9868184183", "9958978483", "8796221553"];
  const address = "Shri Ram Marg, Kandoli, Dehradun, Uttarakhand 248007";

  const amenities = [
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet connection" },
    { icon: Car, title: "Parking", description: "Secure parking space available" },
    { icon: Shield, title: "24/7 Security", description: "CCTV surveillance & security" },
    { icon: Utensils, title: "Kitchen Facility", description: "Fully equipped common kitchen" },
    { icon: Tv, title: "Common Area", description: "TV lounge and recreation area" },
    { icon: Wind, title: "Spacious", description: "Well-ventilated comfortable spaces" },
  ];

  const galleryImages = [
    { src: "/lovable-uploads/1c326a68-d88c-46ed-87ec-f46c4805d260.png", alt: "Elevator" },
    { src: "/lovable-uploads/fdd259b4-ef49-43c9-94b1-d0e4d32e236d.png", alt: "Furnished Bed" },
    { src: "/lovable-uploads/3ec7b9e3-8fc5-4343-8b2f-9fd76c6cc5b3.png", alt: "Dining Area" },
    { src: "/lovable-uploads/7bcc096f-ac72-422a-a3da-99457d372d17.png", alt: "City View" },
    { src: "/lovable-uploads/c1b7d605-5ca2-46b4-a96d-b298e5c1984c.png", alt: "Building Exterior" },
    { src: "/lovable-uploads/651930b6-67b1-4ba2-b279-0e57264e9964.png", alt: "Furnished Beds" },
    { src: "/lovable-uploads/8380887d-1782-4a7f-8bf0-a8ad0ebba845.png", alt: "Bathroom" },
    { src: "/lovable-uploads/f1658ae6-70b7-4593-9ac9-5b87a1cf2b46.png", alt: "Building View" },
  ];

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">UNIQ FLAT KANDOLI</h1>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="hidden md:inline text-sm font-medium">{contactNumbers[0]}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to UNIQ FLATS
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Premium PG Accommodation in Kandoli, Dehradun
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience comfortable living with modern amenities in the heart of Dehradun. 
            Your home away from home with all facilities and 24/7 support.
          </p>
          <Button size="lg" onClick={() => handleCall(contactNumbers[0])} className="mr-4">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Details
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Take a Virtual Tour</h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m89GEHe1j4I"
                title="UNIQ FLATS Virtual Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <amenity.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{amenity.title}</h4>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">{address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Contact Numbers</p>
                    {contactNumbers.map((number, index) => (
                      <p key={index} className="text-gray-300">
                        <button 
                          onClick={() => handleCall(number)}
                          className="hover:text-blue-400 transition-colors underline"
                        >
                          {number}
                        </button>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Why Choose UNIQ FLATS?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Safe and secure environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>Prime location in Kandoli, Dehradun</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5 text-green-400" />
                  <span>Modern amenities and facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-400" />
                  <span>Friendly community atmosphere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">UNIQ FLAT KANDOLI</h2>
          <p className="text-gray-400 mb-4">Premium PG Accommodation in Dehradun</p>
          <div className="flex justify-center space-x-6">
            {contactNumbers.map((number, index) => (
              <button 
                key={index}
                onClick={() => handleCall(number)}
                className="hover:text-blue-400 transition-colors"
              >
                {number}
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 UNIQ FLAT KANDOLI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
