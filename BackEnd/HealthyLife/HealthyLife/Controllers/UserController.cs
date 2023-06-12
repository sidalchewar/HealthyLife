using HealthyLife.Data;
using HealthyLife.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HealthyLife.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        public readonly DataContext db;
        public UserController(DataContext db)
        {
            this.db=db;
        }
        // GET: api/<UserController>
        [HttpGet]
        public List<User> Get()
        {
            return db.Users.ToList();
        }
        [HttpPost("{username}/{password}")]
        public User Get(string username, string password)
        {
             return db.Users.FirstOrDefault(u=>u.UserName.Equals(username) && u.Password.Equals(password));
            
        }

        [HttpPost]
        public List<User> Post(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return db.Users.ToList();
        }
    }
}