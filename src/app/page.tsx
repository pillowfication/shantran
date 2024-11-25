'use client'

import Button from '@/components/ui/button'
import Collapsible from '@/components/ui/collapsible'
import { type ReactElement } from 'react'

export default function Home (): ReactElement {
  return (
    <>
      <h1 id='about' className='text-primary text-2xl mb-2'>ABOUT ME</h1>
      <section className='mb-10'>
        <div className='grid grid-cols-[50%_50%] mb-5'>
          <div>
            <p className='text-primary text-4xl mt-6'>I am a PhD candidate in Economics at the University of Hawaiʻi at Mānoa.</p>
            <p className='text-primary text-2xl'>My research focuses on the social and institutional factors that shape academic science, with a focus on innovation and inclusion.</p>
            <p className='text-0.5xl'>I am currently on the job market for the 2024-2025 academic year. I will be <a href='https://www.aeaweb.org/conference/2025/preliminary/2057?q=eNo1jEEKgDAMBP-yZwU9ePEdfqDWUHKoLUlRpPTvpoi32d1hK5RUOZ3bkwlr_SNWzGgDvCsUkjyWMcCpJv9hIYlGu_AR-AzWHK5b87j0lSN93sV091_J2YplQmsvh7kjfQ,,' className='text-primary hover:underline'>presenting my job market paper</a> at the AEAs in San Francisco, CA in January 2025.</p>
          </div>
          <div className='px-5'>
            <img
              src='/images/shantran.png'
              alt='Shannon Tran'
              className='w-full'
            />
          </div>
        </div>
      </section>
      <h1 id='research' className='text-primary text-2xl mb-2 text-right'>RESEARCH</h1>
      <section className='mb-10'>
        <div className='grid grid-cols-[40%_60%] mb-5'>
          <div className='px-5'>
            <img
              src='/images/research.jpg'
              alt='research'
              className='w-full'
            />
          </div>
          <div>
            <p className='mt-6 ml-4'>My research focuses on understanding the social and institutional factors that shape scientific production, with an emphasis on issues of inequality and diversity. I primarily employ reduced-form empirical methods to answer these questions. More specifically, I use exogenous shocks as quasi-experimental variation and matching methods to identify causal relationships. My research has explored gender disparities in academia, the impact of social policies on scientific productivity, and the role of cultural factors in scientific development.</p>
            <p className='mt-6 ml-4'>My job market paper examines how gender influences the benefits of coauthorship with "superstar" economists on the publication outcomes of junior economists. I find that junior women benefit more from early coauthorship with female superstars compared to male superstars. I've also coauthored published papers exploring the factors influencing scientific production in developing countries, highlighting the influence of social trust, community engagement, and research evaluation systems.</p>
          </div>
        </div>
        <div>
          <p className='mt-6 ml-4'>Beyond my research, I'm committed to fostering diversity, equity, and inclusion in academia. As a research assistant for the <a href='https://manoa.hawaii.edu/advance/' className='text-primary hover:underline'>ADVANCE Kaulike Catalyst project</a>, I contribute to efforts to address systemic gender inequities in STEM faculty at the University of Hawai'i.</p>
        </div>
      </section>
      <h1 className='text-primary text-2xl mb-2'>JOB MARKET PAPER</h1>
      <section className='mb-10'>
        <p className='text-3xl'>Star Secrets? Gender differences in the impact of superstar coauthorship in Economics</p>
        <p className='text-lg'>Abstract: The field of economics grapples with a persistent gender gap, with the underrepresentation of women worsening at higher academic ranks (CSWEP, 2020). This paper investigates how gender shapes the benefits of collaboration with highly successful economists, or "superstars." Specifically, I examine whether early coauthorship with a female superstar has a differential impact on the publication success of junior researchers compared to coauthorship with a male superstar. Using a difference-in-differences with a matched sample design, I find that junior women who coauthor with female superstars experience significantly better publication outcomes compared to those who coauthor with male superstars. In contrast, junior men appear to perform similarly regardless of the gender of their superstar coauthor. These findings suggest that female superstars may offer unique benefits to junior women that encourage publication success. These results highlight the importance of gender-specific factors in shaping success in economics and suggest that ongoing efforts for supporting women in economics should consider gender-specific approaches.</p>
      </section>
      <h1 className='text-primary text-2xl mb-2'>PUBLICATIONS</h1>
      <section className='mb-10'>
        <ul className='list-disc pl-10'>
          <li>“<a href='https://www.sciencedirect.com/science/article/abs/pii/S0048733323000379' className='text-primary hover:underline'>Ranking Researchers: Evidence from Indonesia</a>” <i>(with John Lynham and Caroline Fry)</i>, <i><b>Research Policy</b></i>, 2023</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p className='text-lg'>In the span of three years, Indonesia went from being the second-worst to the top producer of scientific journal articles in Southeast Asia. We investigate whether a transparent system of ranking every single researcher in the country based on publications and citations (SINTA) contributed to this turnaround. Using panel data from over 200,000 Indonesian researchers (and comparing to researchers from Thailand and the Philippines), we show that the implementation of SINTA coincides with changes in the production of publications by Indonesian researchers consistent with the weights used in the ranking formula. Although we see modest improvements in publication rates in top-ranked journals, 62% of the observed increase in total publications is from conference proceedings. Because SINTA was launched around the same time as other policies that focused on increasing publications, isolating the precise impact of SINTA remains challenging. Nevertheless, after accounting for such policies, our results imply that a ranking and evaluation system for researchers can contribute to overall improvements in scientific capacity in low- and middle-income countries.</p>
          </Collapsible.Content>
        </Collapsible>
        <ul className='list-disc pl-10'>
          <li>“<a href='https://www.tandfonline.com/doi/full/10.1080/13662716.2024.2421933' className='text-primary hover:underline'>The Price of Mistrust: The impact of a medical ethics scandal on scientific capacity in sub-Saharan Africa</a>” <i>(with Caroline Fry)</i>, <i><b>Industry and Innovation</b></i>, 2024</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p className='text-lg'>This study investigates how negative news alleging ethical misconduct in clinical trials can hinder scientific development in emerging economies. We examine a 2000 exposé surrounding a clinical trial conducted in Northern Nigeria, leading to decades of community mistrust in foreign pharmaceutical companies. By comparing scientific output of researchers in affected and less affected regions, we find a significant decline in publication growth, particularly for medical researchers. An exploration of the mechanisms suggests that eroded community support and participation in research and reduced international collaboration contributed to this slowdown. This study highlights the importance of the science-community relationship in fostering scientific development. Our findings imply that a ’social li- cense to operate’ grounded in community trust is essential for scientific progress, and that future research on the determinants of scientific capacity in developing countries should consider community attitudes and involvement.</p>
          </Collapsible.Content>
        </Collapsible>
      </section>
      <h1 className='text-primary text-2xl mb-2'>IN PROGRESS</h1>
      <section className='mb-10'>
        <ul className='list-disc pl-10'>
          <li>“Star Secrets? Gender differences in the impact of superstar coauthorship in Economics”</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p className='text-lg'>The field of economics grapples with a persistent gender gap, with the underrepresentation of women worsening at higher academic ranks (CSWEP, 2020). This paper investigates how gender shapes the benefits of collaboration with highly successful economists, or "superstars." Specifically, I examine whether early coauthorship with a female superstar has a differential impact on the publication success of junior researchers compared to coauthorship with a male superstar. Using a difference-in-differences with a matched sample design, I find that junior women who coauthor with female superstars experience significantly better publication outcomes compared to those who coauthor with male superstars. In contrast, junior men appear to perform similarly regardless of the gender of their superstar coauthor. These findings suggest that female superstars may offer unique benefits to junior women that encourage publication success. These results highlight the importance of gender-specific factors in shaping success in economics and suggest that ongoing efforts for supporting women in economics should consider gender-specific approaches.</p>
          </Collapsible.Content>
        </Collapsible>
        <ul className='list-disc pl-10'>
          <li>“Food for Thought: Can College Pantries Nourish Academic Success?”</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p className='text-lg'>Rising tuition and living expenses have intensified food insecurity among college students, prompting a surge in campus food pantries. This study investigates the impact of these pantries on student success. Using institutional-level panel data, I examine the relationship between pantry establishment and student retention rates. Additionally, an individual-level analysis using instrumental variables will assess the impact of pantry access on student academic performance. By filling this research gap, this study contributes to understanding the efficacy of campus food pantries in addressing student needs and improving academic outcomes.</p>
          </Collapsible.Content>
        </Collapsible>
      </section>
      <h1 id='cv' className='text-primary text-2xl mb-2 text-right'>CV</h1>
      <section className='mb-10'>
        <div className='grid grid-cols-[40%_60%] mb-5'>
          <div className='px-5'>
            <img
              src='/images/ellipsis.jpg'
              alt='Shannon Tran'
              className='w-full'
            />
          </div>
          <div>
            <p className='text-2xl mt-10'>Interested in my background and experience?<br /><a href='/cv.pdf' target='_blank' className='text-primary hover:underline'>Check out my CV.</a></p>
          </div>
        </div>
      </section>
      <h1 id='contact' className='text-primary text-2xl mb-2'>CONTACT</h1>
      <section className='mb-20'>
        <div>
          <span className='text-2xl font-semibold'>Shannon P. Tran</span><br />
          <a href='mailto:sptran@hawaii.edu' className='text-primary'>sptran@hawaii.edu</a><br />
          <span className='text-primary'>(408) 332-0704</span><br />
          <br />
          Department of Economics<br />
          University of Hawaiʻi at Mānoa<br />
          Saunders Hall 538<br />
          2424 Maile Way, Honolulu, HI 96822
        </div>
      </section>
    </>
  )
}
