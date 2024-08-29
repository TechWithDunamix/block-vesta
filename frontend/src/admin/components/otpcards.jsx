const OTPCard = ({otp}) => {
    return (
        <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Transaction Details</div>
    <table class="w-full text-sm">
      <tbody>
        <tr>
          <td class="font-semibold pr-4 py-2">ID:</td>
          <td class="py-2">{otp.id}</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="font-semibold pr-4 py-2">Code:</td>
          <td class="py-2">{otp.code}</td>
        </tr>
        <tr>
          <td class="font-semibold pr-4 py-2">Date:</td>
          <td class="py-2">{otp.date}</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="font-semibold pr-4 py-2">Used:</td>
          <td class="py-2">{otp.deleted ? 'True' : "False"}</td>
        </tr>
        <tr>
          <td class="font-semibold pr-4 py-2">Purpose:</td>
          <td class="py-2">{otp.purpose}</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="font-semibold pr-4 py-2">User:</td>
          <td class="py-2 break-all">{otp.user}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    )
}

export default OTPCard