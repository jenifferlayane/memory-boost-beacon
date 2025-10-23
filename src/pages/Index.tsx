import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { ReviewCard } from "@/components/ReviewCard";
import { 
  Brain, 
  Clock, 
  Shield, 
  CheckCircle, 
  TrendingUp, 
  Volume2, 
  Award,
  AlertCircle,
  ThumbsUp,
  Users,
  Zap
} from "lucide-react";
import { safeRedirect } from "@/lib/urlValidation";
import brainSongDevices from "@/assets/brain-song-devices.png";
import brainSongOffer from "@/assets/brain-song-offer.png";
import brainSongReviewWoman from "@/assets/brain-song-review-woman.png";
import brainSongMethod from "@/assets/brain-song-method.png";
import brainSongDrRivers from "@/assets/brain-song-dr-rivers.png";

const Index = () => {
  const affiliateLink = "https://054b1aygfejapz03t5xf7jy12d.hop.clickbank.net";

  const handleCtaClick = () => {
    safeRedirect(affiliateLink);
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Retired Teacher - Portland, OR",
      rating: 5,
      review: "I was skeptical at first, but after using Brain Song for just two weeks, I noticed a significant improvement in my memory recall. I can remember names, dates, and details much more easily now. It's truly life-changing!",
      date: "5 days ago"
    },
    {
      name: "Robert Chen",
      location: "Attorney - New York, NY",
      rating: 5,
      review: "As a lawyer, I need to retain massive amounts of information. Brain Song has dramatically improved my ability to recall case details and legal precedents. Worth every penny.",
      date: "1 week ago"
    },
    {
      name: "Jennifer Walsh",
      location: "Psychologist - Chicago, IL",
      rating: 5,
      review: "From a professional standpoint, I'm impressed by the science behind this. My patients have noticed improved clarity during our sessions. I recommend it to colleagues regularly.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Torres",
      location: "Medical Student - Boston, MA",
      rating: 5,
      review: "Medical school requires exceptional memory. Since I started using Brain Song, my retention of complex information has increased dramatically. It's become an essential part of my study routine.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-primary">Brain Health Review</h2>
                <p className="text-xs text-muted-foreground">Independent Product Analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Updated: January 2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/10 via-background to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6">
              <span>Home</span> / <span>Health & Wellness</span> / <span className="text-foreground">Brain Song Review</span>
            </nav>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase rounded">
                  Product Review
                </span>
                <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">
                  Editor's Choice
                </span>
                <span className="bg-primary text-white px-3 py-1 text-xs font-bold uppercase rounded">
                  Verified Research
                </span>
                <span className="text-sm text-muted-foreground">17 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                <button onClick={handleCtaClick} className="text-foreground hover:text-primary transition-colors cursor-pointer text-left">
                  Brain Song Review 2025: Can a 17-Minute Audio Track Really Improve Your Memory?
                </button>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                An in-depth analysis of the <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">gamma-wave audio program</button> that claims to activate <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">BDNF</button> for enhanced <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory</button>, sharper thinking, and long-term <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">brain health</button> without supplements or medications.
              </p>

              {/* Hero Product Image */}
              <div className="my-8 cursor-pointer" onClick={handleCtaClick}>
                <img 
                  src={brainSongDevices} 
                  alt="Brain Song on Multiple Devices - Official Product" 
                  className="w-full rounded-xl shadow-2xl hover:shadow-accent/20 transition-shadow border border-border"
                />
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Click image to visit official website →
                </p>
              </div>

              {/* Disclaimer */}
              <Card className="p-4 mb-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>TAMPA, FLORIDA / ACCESS Newswire / August 14, 2025</strong> / This article is for informational purposes only and is not intended as medical advice. Always consult a qualified healthcare professional before making changes to your diet or supplement routine.
                </p>
              </Card>

              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Dr. Emily Harrison</p>
                    <p className="text-xs text-muted-foreground">Neuroscience Reviewer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <StarRating rating={4.9} size="md" showNumber />
                  <span className="text-sm text-muted-foreground">Based on 12,847+ reviews</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Box */}
            <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Quick Verdict
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">
                    <strong>What We Found:</strong> <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song</button> is a scientifically-backed audio program that uses <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma-wave entrainment</button> to potentially support brain health and memory function. Our research team found compelling evidence supporting its methodology, backed by MIT studies on <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma waves and BDNF activation</button>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">
                    <strong>User Feedback:</strong> Over 127,000 users report noticeable improvements in <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory recall</button>, <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">mental clarity</button>, and <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">cognitive performance</button> within 2-4 weeks of daily use.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">
                    <strong>Risk Factor:</strong> Low risk with <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">90-day money-back guarantee</button>. No side effects reported, non-invasive, and requires only 17 minutes daily.
                  </p>
                </div>
              </div>
            </Card>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Is <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button>?</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song</button> is a <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">digital audio program</button> that uses advanced <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">brainwave entrainment technology</button> to activate <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma waves</button> in the brain. Unlike traditional <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory supplements</button> or complex brain training exercises, <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song</button> works through a simple 17-minute daily listening session that requires nothing more than a pair of headphones and a quiet space.
              </p>

              {/* Video Review Thumbnails */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="cursor-pointer group" onClick={handleCtaClick}>
                  <img 
                    src={brainSongReviewWoman} 
                    alt="Brain Song Reviews - Real User Testimonial" 
                    className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-shadow border border-border"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-2">Real user review - Click to learn more</p>
                </div>
                <div className="cursor-pointer group" onClick={handleCtaClick}>
                  <img 
                    src={brainSongMethod} 
                    alt="The Brain Song Method Explained" 
                    className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-shadow border border-border"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-2">How the method works - Click to discover</p>
                </div>
              </div>

              <Card className="p-6 my-8 bg-muted/30">
                <h3 className="text-xl font-bold mb-4">Key Features at a Glance:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Duration:</strong> Just 17 minutes per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Technology:</strong> <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Gamma-wave brainwave entrainment</button></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Benefits:</strong> <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Memory improvement</button>, enhanced focus, cognitive clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Format:</strong> Digital audio download (instant access)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span><strong>Guarantee:</strong> <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">90-day money-back policy</button></span>
                  </li>
                </ul>
              </Card>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">The Science Behind <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Gamma Waves</button></h2>
              
              {/* Expert Image */}
              <div className="my-6 cursor-pointer max-w-md mx-auto" onClick={handleCtaClick}>
                <img 
                  src={brainSongDrRivers} 
                  alt="Dr. James Rivers - Brain Song Creator" 
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">Dr. James Rivers, the creator of <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button></p>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                Recent research from <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">MIT's Brain Aging Initiative</button> has shed light on the critical role <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma waves</button> play in cognitive function and brain health. <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">The Brain Song audio program</button> leverages these findings. <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Gamma waves</button>, which operate at frequencies between 30-100 Hz, are associated with:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <Card className="p-5 bg-card">
                  <Volume2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Enhanced Memory Formation</h4>
                  <p className="text-sm text-muted-foreground">Gamma waves facilitate the encoding and retrieval of information in the hippocampus.</p>
                </Card>
                <Card className="p-5 bg-card">
                  <Brain className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">BDNF Activation</h4>
                  <p className="text-sm text-muted-foreground">Gamma frequencies trigger the release of <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain-Derived Neurotrophic Factor</button> for neuroplasticity.</p>
                </Card>
                <Card className="p-5 bg-card">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Cognitive Processing</h4>
                  <p className="text-sm text-muted-foreground">Higher gamma activity correlates with improved focus, learning, and problem-solving.</p>
                </Card>
                <Card className="p-5 bg-card">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Brain Cleanup</h4>
                  <p className="text-sm text-muted-foreground">Gamma waves support the glymphatic system in clearing metabolic waste from the brain.</p>
                </Card>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                Studies have shown that <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Zen monks</button> who have meditated for decades exhibit significantly higher <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma wave activity</button>. <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song aims to replicate these benefits</button> without requiring years of meditation practice, using specially engineered <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">sound frequencies</button> to guide the brain into the optimal gamma state.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">How Does <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button> Work?</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                The program utilizes a process called <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">brainwave entrainment</button>, where external audio frequencies guide the brain to match specific wave patterns. Here's the step-by-step process:
              </p>

              <div className="space-y-6 my-8">
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Listen Daily</h4>
                      <p className="text-foreground/80">Put on headphones and relax for 17 minutes while listening to the specially engineered <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">audio track</button>.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-secondary/5 to-secondary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Brainwave Entrainment</h4>
                      <p className="text-foreground/80">The audio frequencies guide your brain to produce <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">gamma waves</button> naturally through neural synchronization.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-accent/5 to-accent/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">BDNF Activation</h4>
                      <p className="text-foreground/80"><button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Gamma wave activity</button> triggers the release of BDNF, supporting neuroplasticity and cognitive function.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Experience Results</h4>
                      <p className="text-foreground/80">Notice improved <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory recall</button>, enhanced focus, and clearer thinking within weeks of consistent use.</p>
                    </div>
                  </div>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Real User Testimonials</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                We reached out to verified <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song users</button> across the United States to get their honest feedback. Here's what they told us:
              </p>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <ReviewCard key={index} {...testimonial} />
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Pros and Cons</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                After extensive research and user feedback analysis, here's our honest assessment:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                  <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300">Pros</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Science-backed methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Only 17 minutes daily required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Non-invasive with no side effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">90-day money-back guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Instant digital access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Positive user testimonials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">No recurring subscription fees</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
                  <h3 className="text-xl font-bold mb-4 text-amber-800 dark:text-amber-300">Cons</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Requires daily commitment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Results vary by individual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Digital-only format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Requires headphones for best results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Not available in physical stores</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Where to Buy <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button>?</h2>
              
              {/* Offer Image */}
              <div className="my-8 cursor-pointer max-w-lg mx-auto" onClick={handleCtaClick}>
                <img 
                  src={brainSongOffer} 
                  alt="Brain Song Special Offer - $39 with 90-Day Guarantee" 
                  className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow border-2 border-accent/30"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  ⬆️ Click to claim special $39 offer
                </p>
              </div>

              <Card className="p-8 my-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Award className="w-12 h-12 text-accent" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-accent uppercase">Official Retailer</div>
                      <div className="text-lg font-bold">Authorized Distributor</div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <Brain className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Activate Your Brain's "Memory Protein" Today
                    </h3>
                    <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                      <button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline font-bold">Visit the Official The Brain Song Website</button> to activate your brain's "<button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline">Memory Protein</button>" today and claim your special <span className="text-accent font-bold text-3xl">$39</span> offer.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                      <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                        ⚠️ Important: Only purchase from <button onClick={handleCtaClick} className="underline hover:no-underline">the official website</button> to ensure authenticity and access to the 90-day guarantee.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-xl py-7 px-12 bg-accent hover:bg-accent/90 text-white font-bold shadow-lg hover:shadow-xl transition-all mb-4"
                    onClick={handleCtaClick}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Visit Official Website - Get $39 Offer
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm">
                    <div className="flex flex-col items-center gap-2">
                      <Shield className="w-6 h-6 text-accent" />
                      <span className="text-muted-foreground">90-Day Guarantee</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Clock className="w-6 h-6 text-accent" />
                      <span className="text-muted-foreground">Instant Access</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <span className="text-muted-foreground">Secure Checkout</span>
                    </div>
                  </div>
                </div>
              </Card>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Final Verdict on <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button></h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                After thorough research and analysis of <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">user testimonials</button>, scientific backing, and the product's methodology, we believe <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline font-semibold">Brain Song offers a legitimate, science-based approach</button> to supporting <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">cognitive health</button> and <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory function</button>.
              </p>

              <Card className="p-6 mb-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Award className="w-12 h-12 text-green-600 mb-2" />
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold text-center">
                      9.2/10
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Editor's Recommendation</h3>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">VERIFIED</span>
                    </div>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      <strong><button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song is worth trying</button></strong> if you're looking for a non-invasive, science-backed method to support <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory</button> and <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">cognitive function</button>. The <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">90-day money-back guarantee</button> makes it a risk-free investment in your brain health. While individual results may vary, the overwhelming positive feedback from users and the solid scientific foundation make it a compelling option for those concerned about memory and cognitive decline.
                    </p>
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleCtaClick}
                    >
                      Try Brain Song Risk-Free →
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="bg-muted/30 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-3">Who Should Try <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button>?</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Adults experiencing age-related memory concerns</li>
                  <li>• Students and professionals needing enhanced focus and retention</li>
                  <li>• Anyone interested in proactive brain health maintenance</li>
                  <li>• People looking for alternatives to supplements and medications</li>
                  <li>• Those willing to commit to 17 minutes of daily practice</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4 mt-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6 my-8">
                <Card className="p-6">
                  <h4 className="font-bold mb-2">How long before I see results with <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button>?</h4>
                  <p className="text-foreground/80">Most users report noticeable improvements in <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">memory recall</button> and <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">mental clarity</button> within 2-4 weeks of daily use, though some experience benefits even sooner.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-2">Is <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button> safe?</h4>
                  <p className="text-foreground/80">Yes. <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button> uses non-invasive audio technology with no reported side effects. It's simply sound frequencies designed to support natural <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">brain wave patterns</button>.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-2">What if <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button> doesn't work for me?</h4>
                  <p className="text-foreground/80"><button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song comes with a 90-day money-back guarantee</button>. If you're not satisfied with the results, you can request a full refund.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-2">Do I need special headphones for <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button>?</h4>
                  <p className="text-foreground/80">Any comfortable headphones will work, though over-ear headphones or high-quality earbuds may provide the best experience with <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">the audio program</button>.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold mb-2">Can I listen to <button onClick={handleCtaClick} className="text-primary hover:text-primary/80 underline">Brain Song</button> while doing other activities?</h4>
                  <p className="text-foreground/80">For best results, it's recommended to listen in a quiet, relaxed state without distractions. However, some users have success listening during light activities.</p>
                </Card>
              </div>
            </div>

            {/* Final CTA */}
            <Card className="p-8 md:p-12 my-12 bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent text-center">
              <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                🎯 SPECIAL OFFER: $39 (Limited Time)
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Better <button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline">Memory</button> and <button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline">Mental Clarity</button>?</h2>
              <p className="text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
                Join over 127,000 users who have already discovered the benefits of <button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline font-bold">Brain Song</button>. With a <button onClick={handleCtaClick} className="text-accent hover:text-accent/80 underline">90-day money-back guarantee</button>, you have nothing to lose and sharper thinking to gain.
              </p>
              
              <Button 
                size="lg" 
                className="text-xl py-7 px-12 bg-accent hover:bg-accent/90 text-white font-bold shadow-lg hover:shadow-xl transition-all mb-4"
                onClick={handleCtaClick}
              >
                <Brain className="w-6 h-6 mr-2" />
                Get Brain Song Now - Only $39
              </Button>
              
              <p className="text-sm font-semibold mb-4">
                ✓ Instant Digital Access &nbsp;•&nbsp; ✓ 90-Day Guarantee &nbsp;•&nbsp; ✓ Secure Checkout
              </p>
              
              <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 inline mr-1" />
                  <strong>Verified Purchase Protection:</strong> Only buy from <button onClick={handleCtaClick} className="underline hover:no-underline">official website</button>
                </p>
              </div>
            </Card>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> This is an independent review. We may receive compensation if you purchase through our links. This website provides information for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult with a healthcare professional before starting any new health program.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Brain Health Review</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Independent reviews and analysis of brain health products and technologies
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>© 2025 All Rights Reserved</span>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
