const Input = ({ label }: { label: string }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <label
        htmlFor="name"
        className="col-span-1 text-right text-2xl text-[#70046C]"
      >
        {label}
      </label>
      <input
        type="text"
        className="col-span-3 rounded-lg border border-black bg-white px-2.5 py-1.5 text-xl focus:outline-[#9747FF]"
      />
    </div>
  )
}
export default Input
