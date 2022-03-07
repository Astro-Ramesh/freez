<script >
// @ts-ignore
import Dropdown from "../components/Dropdown.svelte";

// async function getData({fetch}){
//     let res =await fetch("/data/index.json.js");
//     const data =await res.json()
//     return data
// }
// const userdata=getData();
// export const post=async ({request})=>{
// const res=await request.json();
// return res
// }
// export let resdata=post();


</script>
<div class="container flex px-5 py-5">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
  </svg>
<h1 class="px-2">CASES</h1>
</div>
<div class="flex items-center justify-center">
    <div class="flex border-2 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search...">
        <button class="flex items-center justify-center px-4 border-l">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
</div>

<div class="flex items-center justify-center py-10">
  <span>
      <Dropdown name="CASES" list1="CRC prnding" list2="Not activated" list3="Closed" list4="Opened"></Dropdown>
  </span>
  <span>
    <Dropdown name="COUNTRY" list1="India" list2="Canada" list3="America" list4="Russia"></Dropdown>
</span>
<span>
    <Dropdown name="TYPE" list1="Direct" list2="Client" list3="Vendor" list4=""></Dropdown>
</span>
<span>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>         
</span>
</div>
  
<div class="container flex justify-center mx-auto px-1 py-10">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table>
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                ID
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            First Name
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Last Name
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Email
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    John
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                doe
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-500">jhondoe@example.com</div>
                            </td>
                           
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>    
 