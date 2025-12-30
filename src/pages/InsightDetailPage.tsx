import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';
import { insights } from '../data/insights';

export const InsightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = insights.find(i => i.id === id);
  
  // Get other articles for "Keep Reading" (exclude current)
  const otherArticles = insights.filter(i => i.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex-grow flex flex-col items-center">
        
        {/* HERO HEADER SECTION */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[60px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Title */}
            <div className="w-full md:w-2/3">
              <Reveal>
                <h1 className="font-serif font-normal text-[56px] md:text-[90px] leading-[0.9] text-black uppercase tracking-tight">
                  {article.title}
                </h1>
              </Reveal>
            </div>

            {/* Meta Table */}
            <div className="w-full md:w-1/3 md:max-w-[300px] border-t border-gray-200">
              <Reveal delay={0.1}>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-black">CATEGORY</span>
                  <span className="font-sans text-[11px] font-medium bg-gray-100 px-2 py-0.5 rounded text-black">{article.category}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-black">LENGTH</span>
                  <span className="font-sans text-[13px] font-medium text-black">{article.length}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-black">DATE</span>
                  <span className="font-sans text-[13px] font-medium text-black">{article.date}</span>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[80px]">
          <Reveal width="100%">
            <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-[#F5F5F0] rounded-[24px] overflow-hidden flex items-center justify-center p-12 md:p-24">
              <img 
                src={article.image} 
                alt={article.title} 
                className="h-full w-auto object-contain mix-blend-multiply filter grayscale contrast-125"
              />
            </div>
          </Reveal>
        </section>

        {/* ARTICLE BODY */}
        <section className="w-full max-w-[680px] px-6 mx-auto mb-[120px]">
          <div className="flex flex-col gap-12">
            
            {/* Introduction */}
            <Reveal>
              <h2 className="font-sans font-black text-[24px] uppercase tracking-tight text-black mb-6">
                INTRODUCTION
              </h2>
              <p className="font-sans text-[18px] leading-[1.6] text-black mb-8">
                The five-day design sprint has become a staple for teams that want to validate ideas quickly. Yet many sprints stall because goals are fuzzy or the schedule slips. This post walks through a lean, practical way to run a sprint that ends with evidence, not exhaustion.
              </p>
              
              {/* Yellow Callout */}
              <div className="bg-[#FFF9E5] rounded-[12px] p-8 md:p-10">
                <p className="font-sans text-[18px] md:text-[20px] leading-[1.5] text-black font-medium text-center">
                  Agree one clear problem statement, pick a decider and book an uninterrupted week.
                </p>
              </div>
            </Reveal>

            {/* Why Sprint */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-black mb-6">
                WHY SPRINT AT ALL?
              </h2>
              <p className="font-sans text-[16px] leading-[1.6] text-black">
                A sprint concentrates research, ideation and testing into one focused week. You cut months of debate and surface unknowns early. When budgets are tight or markets move fast, that focus is priceless.
              </p>
            </Reveal>

            {/* Setting the Stage */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-black mb-6">
                SETTING THE STAGE
              </h2>
              <p className="font-sans text-[16px] leading-[1.6] text-black">
                Agree one clear problem statement, pick a decider and book an uninterrupted week. Invite only six to eight people; any more and momentum dies. Gather existing data, customer quotes and tech constraints so the team starts informed, not guessing.
              </p>
            </Reveal>

            {/* Running the Sprint */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-black mb-8">
                RUNNING THE SPRINT
              </h2>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-wide text-black mb-2">DAY ONE: MAP AND TARGET</h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-black">Define the user journey, highlight pain points and choose one high-value moment to fix.</p>
                </div>
                <div>
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-wide text-black mb-2">DAY TWO: SKETCH</h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-black">Each person draws competing solutions alone, then the group critiques the ideas silently.</p>
                </div>
                <div>
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-wide text-black mb-2">DAY THREE: DECIDE</h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-black">Vote on screens, stitch a storyboard and lock the prototype scope.</p>
                </div>
                <div>
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-wide text-black mb-2">DAY FOUR: BUILD</h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-black">Craft a façade prototype in tools like Figma or ProtoPie; fidelity should match the question.</p>
                </div>
                <div>
                  <h3 className="font-sans font-black text-[18px] uppercase tracking-wide text-black mb-2">DAY FIVE: TEST</h3>
                  <p className="font-sans text-[16px] leading-[1.6] text-black">Show the prototype to five real users, capture reactions and tally themes.</p>
                </div>
              </div>
            </Reveal>

            {/* Avoiding Pitfalls */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-black mb-6">
                AVOIDING <br/> COMMON PITFALLS
              </h2>
              <p className="font-sans text-[16px] leading-[1.6] text-black">
                Skip slide decks; draw on whiteboards. Keep discussions time-boxed with a visible timer. If no one owns a task, it will not happen—assign single owners for each action.
              </p>
            </Reveal>

            {/* Measuring Success */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-black mb-6">
                MEASURING SUCCESS
              </h2>
              <p className="font-sans text-[16px] leading-[1.6] text-black">
                Success is not a polished UI. It is knowing whether the concept solves the problem and whether users grasp it unaided. Summarise findings the same day, then decide: iterate, build for real or kill.
              </p>
            </Reveal>

          </div>
        </section>

        {/* KEEP READING (Dark Section) */}
        <section className="w-full bg-black py-[100px]">
          <div className="w-full max-w-content px-6 md:px-10 mx-auto">
            <div className="flex justify-between items-baseline mb-12">
              <h2 className="font-sans font-black text-[32px] uppercase tracking-tight text-white">
                KEEP READING
              </h2>
              <Link to="/insights" className="text-[13px] font-medium text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors">
                All posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
              {otherArticles.map((item, index) => (
                <Link to={`/insights/${item.id}`} key={item.id} className="flex flex-col group cursor-pointer">
                  <Reveal delay={index * 0.1}>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-[16px] bg-[#F5F5F0] mb-[24px] flex items-center justify-center p-12">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="h-full w-auto object-contain mix-blend-multiply filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                  <h3 className="font-sans font-black text-[20px] md:text-[24px] leading-tight text-white mb-4 uppercase">
                    {item.title}
                  </h3>
                  <span className="font-sans text-[13px] font-bold text-white border-b border-white/20 self-start pb-0.5 group-hover:border-white transition-colors">
                    Read post &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
