export const SectionHeader = ( {
    title,
    eyebrow,
    description,
}:{
    title: string;
    eyebrow: string;
    description: string;
})=>{
    return (
    <>
    <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest bg-gradiennt-to-r from-emerald-300 to-sky-400  text-center  bg-clip-text text-tranaparent">
         {eyebrow}
      </p>
    </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md text-white/60 mt-4 mx-auto">
        {description}
      </p>
    </>

    );
}