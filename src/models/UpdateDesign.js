import { useState } from "react"
import  {ResultFunction} from "../comman/resultFunction"
import { useEffect } from "react"
import { updateDesign } from "../services/design.service"

export const UpdateDesign = (props) => {
    const[designType,setDesignType] = useState("")
    const[icon,setIcon] = useState("")
    const[file,setFile] = useState("")
    const[id,setId] = useState("")
    const array = ["Social Media","Book Cover","Visiting Card","Other"]

    useEffect(()=>{
      console.log("propsprosprops",props)
        if(props && props.design){
            setDesignType(props.design.designType)
            setIcon(props.design.icon)
            setFile(props.design.file)
            setId(props.design._id)
        }
    },[props])

  const handleFileChange = (e) => {
      let file = e.target.files[0]
      let name = e.target.name
      if(name == "file"){
        setFile(file)
      }
      else{
        setIcon(file)
      }
  }

  const handleSubmit = async() => {
    const formdata = new FormData()
    formdata.append("id",id)
    formdata.append("designType",designType)
    formdata.append("file",file)
    formdata.append("icon",icon)
    let result = await updateDesign(formdata)
    ResultFunction(result,props.designList)
  }

  return (
    <div
    class="modal"
    id="edit_design"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog  alert_modal" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">
            Update
          </h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
          <div className="form-group mb-3">
                  <label className="small mb-1">Select Design Type</label>
                  <select
                   class="form-control  form-control-solid"
                   onChange={(e)=>setDesignType(e.target.value)}>
                    <option>{designType}</option>
                    {/* {
                      array.map((val,i)=>{
                        return <option value={val} key={i}>{val}</option>
                      })
                    } */}
                  </select>
                </div> <div className="form-group mb-3">
                  <label className="small mb-1">Add Icon </label>
                  <input
                    class="form-control  form-control-solid"
                    type="file"
                    name="icon"
                    placeholder=""
                    onChange={handleFileChange}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="small mb-1">File </label>
                  <input
                    class="form-control  form-control-solid"
                    type="file"
                    name="file"
                    placeholder=""
                    onChange={handleFileChange}
                  />
                </div>
            <button
              class="btn btn-s btn-indigo btn-block w-100"
              data-bs-dismiss="modal"
              type="button"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)
}

export default UpdateDesign