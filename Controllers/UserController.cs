using Microsoft.AspNetCore.Mvc;

namespace Weather_Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        private static readonly List<User> Users = new List<User>()
        {
            new User(){Name = "Mac User", IconUrl = "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Finder_5122x.png"},
            new User(){Name = "Window User", IconUrl = "https://2.bp.blogspot.com/-BVgTOe82aaI/VZln4Ny-LPI/AAAAAAAAA6Y/hKchnruxKtg/s1600/2000px-User_icon_2.svg.png"},
            new User(){Name = "Linux User", IconUrl = "https://www.freepnglogos.com/uploads/linux-png/compiling-the-linux-kernel-ubuntu-ultimatepeterm-31.png"}
        };

        [HttpGet("get-all")]
        public IEnumerable<User> GetAll()
        {
            return Users;
        }

        [HttpGet()]
        public IActionResult Get()
        {
            // Get user agent
            var userAgent = Request.Headers["User-Agent"].FirstOrDefault();

            // Check the user agent
            if (userAgent != null && userAgent.Contains("Mac"))
            {
                return Ok(Users[0]);
            }
            else if (userAgent != null && userAgent.Contains("Windows"))
            {
                return Ok(Users[1]);
            }
            else if (userAgent != null && userAgent.Contains("Linux"))
            {
                return Ok(Users[2]);
            }
            
            return Ok(new User(){Name = "Unknown", IconUrl = "https://2.bp.blogspot.com/-BVgTOe82aaI/VZln4Ny-LPI/AAAAAAAAA6Y/hKchnruxKtg/s1600/2000px-User_icon_2.svg.png"});
        }
    }
}