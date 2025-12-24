export default function StorageCapacity() {
  const storage_used: number = 1 
  const total_storage: number = 15

  const usedPercentage = (storage_used / total_storage) * 100

  const handleBarColor = () : string => {
    if(usedPercentage < 34){
        return "bg-green-500";
    }
    if(usedPercentage < 66){
        return "bg-orange-500";
    }
    return "bg-red-500";
  }

  return (
    <div className="flex flex-col w-full px-2 py-2">
      <div className="bg-amber-50 w-full h-1 rounded overflow-hidden">
        <div 
        className={`h-full transition-all duration-300 ${handleBarColor()}`}
        style={{ width: `${usedPercentage}%` }}
        />
      </div>
      <h1 className="mt-2 text-white text-[14px]">
        {storage_used} of {total_storage} GB used
      </h1>
    </div>
  )
}
