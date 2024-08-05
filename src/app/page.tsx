'use client'

import Button from '@/components/ui/button'
import Collapsible from '@/components/ui/collapsible'
import { type ReactElement } from 'react'

export default function Home (): ReactElement {
  return (
    <>
      <h1 id='about' className='text-primary text-2xl mb-2'>ABOUT</h1>
      <section className='mb-10'>
        <div className='grid grid-cols-[50%_50%] mb-5'>
          <div>
            <p className='text-primary text-4xl mt-6'>I am a PhD candidate in Economics at the University of Hawaiʻi at Mānoa.</p>
            <p className='text-primary text-2xl'>My research examines factors influencing scientific production, with a particular focus on underrepresented groups such as women and researchers from low-income countries.</p>
          </div>
          <div className='px-5'>
            <img
              src='/images/shantran.png'
              alt='Shannon Tran'
              className='w-full'
            />
          </div>
        </div>
        <div>
          <p className='text-2xl'>I’m currently on the job market for the 2024-2025 academic year. My job market paper investigates the gender dynamics of collaborations between junior and established economists. My findings reveal that junior women derive unique benefits from working with female "superstars," emphasizing the role of gender in shaping professional outcomes and the potential for skill transfer within these partnerships.</p>
          <p className='text-2xl'>As a graduate research assistant for the UH Mānoa ADVANCE Kaulike Catalyst project, I contribute to data collection and institutional self-assessment to identify systemic gender inequities among STEM faculty.</p>
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
            <p className='mt-6 ml-4'>My research examines the factors influencing scientific production, with a focus on the contributions of underrepresented groups, particularly women and researchers from developing countries. By analyzing gender dynamics, collaboration patterns, and broader research ecosystem factors, I aim to identify the key inputs and processes that foster inclusive and productive scientific environments. Recognizing the critical role of diversity in driving innovation, I investigate the barriers hindering the participation of researchers from low-income countries and women, including skill gaps, limited networks, and resource constraints. This research seeks to develop effective strategies for overcoming these challenges and promoting equity in scientific contributions.</p>
          </div>
        </div>
      </section>
      <h1 className='text-primary text-2xl mb-2'>JOB MARKET PAPER</h1>
      <section className='mb-10'>
        <p className='text-3xl'>Star Secrets? Examining the Gendered Effects of Collaboration on Junior Economists’ Success</p>
        <p className='text-lg'>Abstract: Do women navigate the path to success differently in economics? This paper explores whether collaborating with prominent female economists (“superstars”) offers early-career women unique advantages in navigating this path. Utilizing publication data and a matched-control design, I examine the gender-specific impact of co-authorship on junior economists' publication success in the US. Results indicate that collaborating with a female superstar significantly enhances publication outcomes for junior women, while having no such effect on junior men. This suggests that female superstars provide unique advantages beyond technical knowledge transfer, potentially equipping junior women with specific skills to navigate the field. I propose that these benefits may stem from female superstars' possession and transfer of non-cognitive skills, which may be less prevalent among male superstars. This research highlights the importance of understanding gender-specific dynamics in academic success within the field of economics.</p>
      </section>
      <h1 className='text-primary text-2xl mb-2'>PUBLICATIONS</h1>
      <section className='mb-10'>
        <ul className='list-disc pl-10'>
          <li>“Ranking Researchers: Evidence from Indonesia” <i>(with John Lynham and Caroline Fry)</i>, <i><b>Research Policy</b></i>, 2023</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p>Abstract: In the span of three years, Indonesia went from being the second-worst to the top producer of scientific journal articles in Southeast Asia. We investigate whether a transparent system of ranking every single researcher in the country based on publications and citations (SINTA) contributed to this turnaround. Using panel data from over 200,000 Indonesian researchers (and comparing to researchers from Thailand and the Philippines), we show that the implementation of SINTA coincides with changes in the production of publications by Indonesian researchers consistent with the weights used in the ranking formula. Although we see modest improvements in publication rates in top-ranked journals, 62% of the observed increase in total publications is from conference proceedings. Because SINTA was launched around the same time as other policies that focused on increasing publications, isolating the precise impact of SINTA remains challenging. Nevertheless, after accounting for such policies, our results imply that a ranking and evaluation system for researchers can contribute to overall improvements in scientific capacity in low- and middle-income countries.</p>
          </Collapsible.Content>
        </Collapsible>
      </section>
      <h1 className='text-primary text-2xl mb-2'>UNDER REVIEW</h1>
      <section className='mb-10'>
        <ul className='list-disc pl-10'>
          <li>“The Price of Mistrust: The impact of a medical ethics scandal on scientific capacity in sub-Saharan Africa” <i>(with Caroline Fry)</i>, R&R at <i><b>Industry and Innovation</b></i></li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p>Abstract: This study investigates how negative news alleging ethical misconduct in clinical trials can hinder scientific development in emerging economies. We examine a 2000 exposé surrounding a clinical trial conducted in Northern Nigeria, leading to decades of community mistrust in foreign pharmaceutical companies. By comparing scientific output of researchers in affected and less affected regions, we find a significant decline in publication growth, particularly for medical researchers. An exploration of the mechanisms suggests that eroded community support and participation in research and reduced international collaboration contributed to this slowdown. This study emphasize the  importance of the science-community relationship in fostering scientific development. This study highlights the importance of the science-community relationship in fostering scientific development. Our findings imply that a ‘social license to operate’ grounded in community trust is essential for scientific progress, and that future research on the determinants of scientific capacity in developing countries should consider community attitudes and involvement.</p>
          </Collapsible.Content>
        </Collapsible>
      </section>
      <h1 className='text-primary text-2xl mb-2'>IN PROGRESS</h1>
      <section className='mb-10'>
        <ul className='list-disc pl-10'>
          <li>“Star Secrets? Examining the Gendered Effects of Collaboration on Junior Economists’ Success”</li>
        </ul>
        <Collapsible>
          <div className='text-right'>
            <Collapsible.Trigger asChild>
              <Button variant='link' className='text-lg'>VIEW ABSTRACT</Button>
            </Collapsible.Trigger>
          </div>
          <Collapsible.Content>
            <p>Abstract: Do women navigate the path to success differently in economics? This paper explores whether collaborating with prominent female economists (“superstars”) offers early-career women unique advantages in navigating this path. Utilizing publication data and a matched-control design, I examine the gender-specific impact of co-authorship on junior economists’ publication success in the US. Results indicate that collaborating with a female superstar significantly enhances publication outcomes for junior women, while having no such effect on junior men. This suggests that female superstars provide unique advantages beyond technical knowledge transfer, potentially equipping junior women with specific skills to navigate the field. I propose that these benefits may stem from female superstars’ possession and transfer of non-cognitive skills, which may be less prevalent among male superstars. This research highlights the importance of understanding gender-specific dynamics in academic success within the field of economics.</p>
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
            <p>Abstract: Rising tuition and living expenses have intensified food insecurity among college students, prompting a surge in campus food pantries. This study investigates the impact of these pantries on student success. Using institutional-level panel data, I examine the relationship between pantry establishment and student retention rates. Additionally, an individual-level analysis using instrumental variables will assess the impact of pantry access on student academic performance. By filling this research gap, this study contributes to understanding the efficacy of campus food pantries in addressing student needs and improving academic outcomes.</p>
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
            <p className='text-2xl mt-10'>Interested in my background and experience?<br /><a href='/Shannon Tran CV.pdf' target='_blank' className='text-primary hover:underline'>Check out my CV.</a></p>
          </div>
        </div>
      </section>
      <h1 id='contact' className='text-primary text-2xl mb-2'>CONTACT</h1>
      <section className='mb-20'>
        <div>
          <span className='text-2xl font-semibold'>Shannon Tran</span><br />
          <a href='mailto:sptran@hawaii.edu' className='text-primary'>sptran@hawaii.edu</a><br />
          <span className='text-primary'>(408) 332-0704</span><br />
          <br />
          Department of Economics<br />
          University of Hawaii at Manoa<br />
          Saunders Hall 538<br />
          2424 Maile Way, Honolulu, HI 96822
        </div>
      </section>
    </>
  )
}
