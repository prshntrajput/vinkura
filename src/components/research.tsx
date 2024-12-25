import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Careers4 = () => {
  const jobs = [
    {
      "category": "",
      "openings": [
        {
          "title": "Enhancing Language Understanding: A Comprehensive Analysis of Large Language Models in Conversational AI",
          "location": "Read Paper ↗",
          "link": "./LLM_in_cai.pdf.pdf"
        },
        {
          "title": "Kuno Technical Report",
          "location": "Read Paper ↗",
          "link": "/kuno_report.pdf"
        },
        {
          "title": "Zero-Shot Learning with LLMs",
          "location": "Read Paper ↗",
          "link": "/Zero_LLM.pdf"
        },
        {
          "title": "GNVT-Llama-3b",
          "location": "Read Paper ↗",
          "link": "Gnvt.pdf"
        },
        {
          "title": "Bridging Vision and Language: Advances in Image Captioning and Visual Question Answering",
          "location": "Read Paper ↗",
          "link": "#"
        },
       
      ]
    }
    
  ];

  return (
    <>
    

<section className="py-32">
  <div className="container flex flex-col items-center justify-center text-center">
    <q className="block max-w-4xl text-2xl font-medium lg:text-3xl">
      We’re not just coding; we’re creating a movement! Let’s make AI that’s as real and diverse as we are, shaping a future where everyone’s got a seat at the table!
    </q>
    <div className="flex flex-col items-center gap-2 sm:flex-row justify-center mt-4">
      <img
        src=""
        alt=""
        className="h-7"
      />
      <p className="font-medium mt-2 sm:mt-0">Akshat Shukla,Founder Vinkura</p>
    </div>
  </div>
</section>

<div className="w-full">
            <div className="container mx-auto">
              <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                <div>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                 Focused Area
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  At <b>Vinkura AI</b>, we specialize in fine-tuning large language models, creating private AI solutions, and conducting research in deep learning. Our work focuses on making AI more efficient, accessible, and secure for diverse applications.</p>
                </div>
              </div>
            </div>
          </div> 

      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-screen-lg">
            <div className="text-center lg:text-left">
              <h1 className="text-left text-3xl font-medium md:text-4xl">
              Research index
              </h1>
            </div>

            {/* Subscribe Section */}
            <div className="flex justify-center items-center mt-8">
              <div className="flex max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search The Database" />
                <Button type="submit">Search</Button>
              </div>
            </div>

            {/* Job Openings Section */}
            <div className="mx-auto mt-4 flex flex-col gap-16 md:mt-10">
              {jobs.map((jobCategory) => (
                <div key={jobCategory.category} className="grid">
                  <h2 className="border-b pb-4 text-xl font-bold">
                    {jobCategory.category}
                  </h2>
                  {jobCategory.openings.map((job) => (
                    <div
                      key={job.title}
                      className="flex items-center justify-between border-b py-4"
                    >
                      <a
                        href={job.link}
                        className="font-semibold hover:underline"
                      >
                        {job.title}
                      </a>

                      <a
                        href={job.link}
                        className={cn(
                          buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                          }),
                          'rounded-full'
                        )}
                      >
                        {job.location}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers4;
