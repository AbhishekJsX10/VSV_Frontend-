
import AboutPageMarquee from './AboutPageMarquee';
import CompantInfo from './CompantInfo';



const CompanyNMarquee = () => {
  

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="0.4" 
      className='relative z-40 mt-[-0.04rem] w-auto rounded-xl'
      >
        <AboutPageMarquee/>
        <CompantInfo />
    </div>
  );
};


export default CompanyNMarquee;
