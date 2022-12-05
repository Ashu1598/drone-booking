import React, { useState } from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"

const OwnerList = () => {
  function createData(name, mobileno, email) {
    return { name, mobileno, email }
  }

  const rows = [
    createData("Ben Trek", 999999999, "bentrek@yahoo.com"),
    createData("Troy Joe cle", 999999999, "troyjoe@gmail.com"),
    createData("Louis Hamilton", 999999999, "louis.ton@gmail.com"),
    createData("Krise Sam", 999999999, "Krise123@gmail.com"),
    createData("Lara Sarey yeu", 999999999, "larayeu@gmail.com.com"),
    createData("Frank Hammer", 999999999, "frankhammer8@gmail.com"),
    createData("Ish Philips Se", 999999999, "ishphilips@gmail.com"),
    createData("Edward Wood", 999999999, "edward_yrk@gmail.com"),
    createData("Dwyane Johnson", 999999999, "dwyanejohnson@gmail.com"),
  ]
  //.sort((a, b) => (a.calories < b.calories ? -1 : 1))

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant='h5' gutterBottom className='mb-4'>
                Owner List
              </Typography>
              <TableContainer>
                <Table
                  sx={{ minWidth: 500 }}
                  aria-label='custom pagination table'
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "black",
                        borderBottom: "2px solid black",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(256,256,256)",
                        },
                      }}
                    >
                      <TableCell>Name</TableCell>
                      <TableCell align='left'>Mobile No</TableCell>
                      <TableCell align='left'>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? rows.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : rows
                    ).map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell align='left'>{row.mobileno}</TableCell>
                        <TableCell align='left'>{row.email}</TableCell>
                      </TableRow>
                    ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "rows per page",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default OwnerList
