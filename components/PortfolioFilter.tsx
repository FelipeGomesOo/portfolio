import { useLocale } from 'next-intl';  
export default function PortfolioFilter({onFilterBy, condition}: any) { 
  const activeStyle = (value: string) => {
    if(value === condition) return "text-blue font-semibold";
    return "";
  }
  const all = useLocale() === 'pt' ? 'Todos' : 'All';
  return (
    <div className="flex gap-5 my-16">
      <button className={activeStyle('')} onClick={onFilterBy} value=''>{all}</button>
      <button className={activeStyle('code')} onClick={onFilterBy} value='code'>Code</button>
      <button className={activeStyle('design')} onClick={onFilterBy} value='design'>Design</button>
    </div>
  );
}