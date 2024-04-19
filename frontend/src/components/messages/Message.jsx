export const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/435890027_1001959178169517_6973336089517261870_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHK4eldKG0zVSKVSpd7ux8RfsPJXioUWz9-w8leKhRbPy0gVv__eKnK9xsklVvMdlCxoK3RqeUO34gtWZyp3r5E&_nc_ohc=Z3xb7ZzshwsAb4eV6qp&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCVul_akGaHVZoz_WbY_FTo8K5_VsE5Hu85Nq_TYULYLQ&oe=6628367D" alt="Tailwind css chat bubble" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hjjj</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}
