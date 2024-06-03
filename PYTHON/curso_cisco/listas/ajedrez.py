
pawn=""
knight=""
rook=""
empty=""
board = [[empty for i in range(8)] for j in range(8)]  #creacion de tablero de ajedrez
board[0][0] = "rook"
board[0][7] = "rook"
board[7][0] = "rook"
board[7][7] = "rook"
board[3][4] = "pawn"
board[4][2] = "knight"
print(board)

