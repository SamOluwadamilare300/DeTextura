
"use client"

import { cn } from "@/lib/utils"
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react"
import { useState, useTransition } from "react"
import DropZone, {FileRejection} from "react-dropzone"
import { Progress } from "@/components/ui/progress"
import { useUploadThing } from "@/components/uploadthing"
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"




const Page =()=>{
  const {toast} = useToast()
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const onDropAccepted = (acceptedfiles: File[]) =>{
    startUpload(acceptedfiles,{configId: undefined})

    setIsDragOver(false)
  }
  const onDropRejected=  (rejectedFiles: FileRejection[]) =>{
    const [file] = rejectedFiles
    setIsDragOver(false)

    toast ({
      title: `${file.file.type}  Not supported.`,
      description: "Please choose a PNG, JPG, or JPEG Image Instead",
      variant: "destructive"
    })
  }

  const router =useRouter()


  const {startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data])=>{
      const configId = data.serverData.configId 
      startTransition(()=>{
        router.push(`/configure/design?id=${configId}`);

      }) 
    },
    onUploadProgress(p) {
    setUploadProgress(p)
    },
  })


 

  const [isPending, startTransition] = useTransition()
  const [uploadProgress, setUploadProgress] = useState<number>(0)

 
  return(


    <div 
  className={cn("relative h-full flex-1 my-16 w-full rounded-xl big-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:runded-2xl flex justify-center flex-col items-center", 
  {"ring-blue-900/25 bg-slate-900/10": isDragOver })}>
      
  <div className="relative flex flex-1 flex-col items-center justify-center">
        <DropZone 
        onDropRejected ={ onDropRejected} 
        onDropAccepted={onDropAccepted}
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg"],
          "image/jpg":  [".jpg"],
        }}
        onDragEnter={()=> setIsDragOver(true)}
        onDragLeave={()=>setIsDragOver(false)}
        > 
       {({ getRootProps, getInputProps }) => (
     <div 
    className="h-full w-full flex flex-col items-center justify-center" 
    {...getRootProps()}
    >
    <input {...getInputProps()} />
    {isDragOver ? (
      <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
    ) : 
    isUploading || isPending ? (
      <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
    ) : (
      <Image className='h-6 w-6 text-zinc-500 mb-2' aria-label="Upload icon"   />
    )}
    <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
      {isUploading ? (
        <div className='flex flex-col items-center'>
          <p>Uploading...</p>

          <Progress
            value={uploadProgress}
            className='mt-2 w-40 h-2 bg-gray-300'
          />
        </div>

      ) : isPending ? (
        <div className='flex flex-col items-center'>
          <p>Redirecting, please wait...</p>
        </div>
      ) : isDragOver ? (
        <p>
          <span className='font-semibold'>Drop file</span> to upload
        </p>
      ) : (
        <p>
          <span className='font-semibold'>Click to upload</span> or
          drag and drop
        </p>
      )}
    </div>

    {isPending ? null : (
      <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
    )}
  </div>
   )}
    </DropZone>
    </div>
    </div>
    )
  }

  export default Page