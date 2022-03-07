<script>
    export let list1
    export let list2
    export let list3
    export let list4
    export let name
    
</script>
<div class="inline-block relative w-64">
    <label for="exampleSearch" class="form-label mb-2 text-gray-700">{name}</label>
    <select class="block appearance-none w-3/4 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option>All</option>
      <option>{list1}</option>
      <option>{list2}</option>
      <option>{list3}</option>
      <option>{list4}</option>
    </select>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg> -->
  </div>
