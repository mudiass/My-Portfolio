import Image from 'next/image';
import "./matrix.scss"

export function Matrix() {
    return (
    
      <div className="matrix">
       <div>
      <h1>Murillo Dias</h1>
      <h2>Software Developer</h2>
    </div>
    
    <Image
      src="/profile-pic.png"
      alt="Vercel Logo"
      width={300}
      height={277}
      priority
    />
    
    </div>
    );
}